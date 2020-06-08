import { html } from 'lighterhtml';
import { updateState } from './state-manager'
import { die } from './die'
import { mrsRobotoDie } from './mrsRobotoDie'
import { ambassadorAldrenDie } from './ambassadorAldrenDie'

interface StateDataInterface {
    crew: any,
    missions: {
        lvlOne:any,
        lvlTwo:any,
        lvlThree:any,
    },
    gameUiData:any,
    player:any
 };

export function characterCard (stateData:StateDataInterface, crewId:string) {
    const { crew, gameUiData, player } = stateData;
    const { phase, selectedDice, crewOnMission, currentCrewAbility, mojoAbility, lastAbilityUsed, lastDiceSelected } = gameUiData;
    const crewData = crew[crewId];
    const iterations = crewData.animations;
    const isDieSelected = gameUiData.selectedDice.includes(crewId);


    function select () {

        if (phase === 1) {
            updateState((data:any)=>{
                if (data.gameUiData.crewOnMission[crewId]) {
                    delete data.gameUiData.crewOnMission[crewId];
                } else {
                    data.gameUiData.crewOnMission[crewId] = crewData.isActive;
                }

            })
        } else if (phase === 3) {
            if (selectedDice.includes(crewId)) {
                updateState((data:any)=>{data.gameUiData.selectedDice.splice(data.gameUiData.selectedDice.indexOf(crewId), 1);})
            } else {
                if (currentCrewAbility === "ambassadorAldren" &&
                    crewOnMission["ambassadorAldren"] === "active" &&
                    selectedDice.length < 2) {
                    updateState((data:any)=>{data.gameUiData.selectedDice.push(crewId);})

                } else if (currentCrewAbility === "ltMojo" &&
                    crewOnMission["ltMojo"] === "active") {
                    if (!mojoAbility) {
                        if (crewId === "ltMojo") {
                            alert("Mojo copies mojo's ability, copies mojo's ability, copies mojo's ability, copies mojo's ability, copies mojo's ability, copies mojo's ability, copies mojo's ability... Monkey explodes.")
                            return;
                        }
                        updateState((data:any)=>{data.gameUiData.mojoAbility = crewId;})
                    } else {
                        updateState((data:any)=>{data.gameUiData.selectedDice = [crewId];})
                    }

                } else {
                    updateState((data:any)=>{data.gameUiData.selectedDice = [crewId];})
                }
            }
        }
    }

    function getSelectedBanner () {
        if (crewOnMission[crewId]) {
            return html`<div class="card-selected">SELECTED</div>`;
        }
    }

    function setAbilityLayer () {
        let abilityImg = crewData.img;
        if (crewId === "ltMojo" && mojoAbility) {
            abilityImg = crew[mojoAbility].img;
        }
        return html`<img class="layer-ability-box" src="./images/crew/layer/ability-${abilityImg}.png" alt="">`;

    }

    function setTraits () {

        return html`${Object.keys(crewData.triggers).map((trigger, i) => {
                if (crewData.triggers[trigger] === false) {
                    return html`
                        <div class="trigger known-trigger" data-i=${i}>${trigger} - ${getTriggerOwner(trigger)}</div>
                    `
                } else if (crewId === player.crew) {
                    return html`
                        <div class="trigger partially-known-trigger" data-i=${i}>${getTriggerOwner(trigger)}</div>
                    `
                } else {
                    return html`
                        <div class="trigger unknown-trigger" data-i=${i}><img src="./images/icons/sight-disabled-black.png" alt="Hidden madness trigger icon"></div>
                    `
                }
            })
        }`

        function getTriggerOwner (triggerTrait) {
            for (const prop in crew) {
                if (crew[prop].traits[triggerTrait]) {
                    return crew[prop].name;
                }
            }
        }

    }

    function setSpecialDie () {
        if (crewData.rolling && phase === 2) {
            return html`${die(crewData.die, iterations, isDieSelected, "normal")}`
        } else if (crewData.rolling &&
            phase === 3 &&
            (lastAbilityUsed === "ambassadorAldren" || lastAbilityUsed ===  "mrsRoboto") &&
            lastDiceSelected.includes(crewId)) {
            return html`${die(crewData.die, iterations, isDieSelected, crewId)}`

        } else if (crewData.rolling && phase === 3) {
            return html`${die(crewData.die, 0, isDieSelected, "normal")}`
        } else {
            return html`<span style="display:none"></span>`;
        }
    }



    return html`
        ${setSpecialDie()}
        <div class="crew-wrapper ${phase > 0 ? "re-pointer" : "no-pointer" }" onclick=${select}>
            <div class=${crewData.isActive === "active" ? "crew-wrapper-inner" : "crew-wrapper-inner crew-inactive"}>
                <div class="crew-front">
                    ${getSelectedBanner()}
                    <img src="./images/crew/bkgrd/${crewData.img}.jpg" alt="">
                    ${setAbilityLayer()}
                    <div class="crew-info">
                        <div class="crew-name re-text-center">${crewData.name}</div>
                        <ul class="traits-list">
                            ${
                            Object.keys(crewData.traits).map((trait:string, i:number) => html`
                                <li data-i=${i}> ${trait} </li>`)
                            }
                        </ul>
                    </div>
                    <div class="crew-ability">
                        <div class="re-text-center re-text-bold">Ability</div>
                        <div class="ability-text" style=${crewId === "ltMojo" && !mojoAbility ? "margin-left: 0px" : "margin-left: 50px"}>
                            ${()=>{
                                if (crewId === "ltMojo" && mojoAbility) {
                                    return crew[mojoAbility].abilityText;
                                } else {
                                    return crewData.abilityText;
                                }
                            }}
                        </div>
                    </div>
                </div>
                <div class="crew-back">
                    ${getSelectedBanner()}
                    <img src="./images/crew/bkgrd/${crewData.img}.jpg" alt="">
                    <div class="crew-info">
                        <div class="crew-name re-text-center">${crewData.name}</div>
                        <ul class="traits-list">
                            ${
                            Object.keys(crewData.traits).map((trait:string, i:number) => html`
                                <li data-i=${i}> ${trait} </li>`)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div style="text-align: left">
            ${setTraits()}
        </div>
    `;
}