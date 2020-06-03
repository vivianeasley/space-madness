import { html } from 'lighterhtml';
import { updateState } from './state-manager'
import { die } from './die'

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

export function characterCard (cardData:StateDataInterface, crewId:string) { //dataObject:object
    const { crew, gameUiData, player } = cardData;
    const { phase, selectedDice, selectedCrew, currentCrewAbilityIndex, mojoAbility } = gameUiData;
    const crewData = crew[crewId];
    const iterations = crewData.animations;
    const isDieSelected = gameUiData.selectedDice.includes(crewId);


    function select () {

        if (phase === 1) {
            updateState((data:any)=>{
                if (data.crew[crewId].isSelected === true) {
                    data.gameUiData.selectedCrew.splice(data.gameUiData.selectedCrew.indexOf(crewId), 1);
                    data.crew[crewId].isSelected = false;
                } else {
                    data.gameUiData.selectedCrew.push(crewId);
                    data.crew[crewId].isSelected = true;
                }

            })
        } else if (phase === 3) {
            if (selectedDice.includes(crewId)) {
                updateState((data:any)=>{data.gameUiData.selectedDice.splice(data.gameUiData.selectedDice.indexOf(crewId), 1);})
            } else {
                if (selectedCrew[currentCrewAbilityIndex] === "ambassadorAldren" &&
                    selectedCrew.length < 2) {
                    updateState((data:any)=>{data.gameUiData.selectedDice.push(crewId);})

                } else if (selectedCrew[currentCrewAbilityIndex] === "ltMojo") {
                    updateState((data:any)=>{data.gameUiData.mojoAbility = crewId;})

                } else {
                    updateState((data:any)=>{data.gameUiData.selectedDice.push(crewId);})
                }
            }
        }
    }

    function getSelectedBanner () {
        if (crewData.isSelected) {
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

    return html`
        ${ crewData.rolling ? die(crewData.die, iterations, isDieSelected) : '' }
        <div class="crew-wrapper" onclick=${select}>
            <div class=${crewData.isActive ? "crew-wrapper-inner" : "crew-wrapper-inner crew-inactive"}>
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