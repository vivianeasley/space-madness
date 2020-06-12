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
    const { phase,
        selectedDice,
        crewOnMission,
        currentCrewAbility,
        mojoAbility,
        lastAbilityUsed,
        lastDiceSelected,
        isSimpleGame } = gameUiData;
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
                            updateState((data:any)=>{
                                data.gameUiData.modalOpen = true;
                                data.gameUiData.modalId = "mojoRecursion";
                                data.gameUiData.modalButtonText = "Continue";
                            });
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

    function setDie () {

        const sideDict = {
            1:"dice-front-view",
            2:"dice-right-view",
            3:"dice-back-view",
            4:"dice-left-view",
            5:"dice-top-view",
            6:"dice-bottom-view"
        }

        if (crewData.rolling && phase === 2) {
            return html`${die(crewData.die, iterations, isDieSelected, "normal")}`
        } else if (crewData.rolling &&
            phase === 3 &&
            (lastAbilityUsed === "ambassadorAldren" || lastAbilityUsed ===  "mrsRoboto") &&
            lastDiceSelected.includes(crewId)) {
            return html`${die(crewData.die, iterations, isDieSelected, lastAbilityUsed)}`

        } else if (crewData.rolling && phase === 3) {
            return html`
            <div class=${isDieSelected ? "view selected-die" : "view"}>
                <div class="dice dice-front-view ${sideDict[crewData.die]}" style="animation-iteration-count: 0;">
                    <div class="diceFace front"></div>
                    <div class="diceFace right"></div>
                    <div class="diceFace back"></div>
                    <div class="diceFace left"></div>
                    <div class="diceFace top"></div>
                    <div class="diceFace bottom"></div>
                </div>
            </div>
            `
        } else {
            return html`
            <div class="view">
                <div class="dice dice-front-view re-display-none" style="animation-iteration-count: 0;">
                    <div class="diceFace front"></div>
                    <div class="diceFace right"></div>
                    <div class="diceFace back"></div>
                    <div class="diceFace left"></div>
                    <div class="diceFace top"></div>
                    <div class="diceFace bottom"></div>
                </div>
            </div>
            `
        }
    }

    function getMadnessOpacity () {
        if (crewData.madnessLevel === 0) {
            return "opacity:0"
        } else if (crewData.madnessLevel === 1) {
            return "opacity:0.3"
        } else if (crewData.madnessLevel === 1) {
            return "opacity:0.5"
        } else {
            return "opacity:0.8"
        }
    }


    return html`
        ${setDie()}
        <div class="crew-wrapper ${phase > 0 ? "re-pointer" : "no-pointer" }" onclick=${select}>
            <div class=${crewData.isActive === "active" ? "crew-wrapper-inner" : "crew-wrapper-inner crew-inactive"}>
                <div class="crew-front">
                    ${getSelectedBanner()}
                    <img src="./images/crew/bkgrd/${crewData.img}.jpg" alt="Crew base image">
                    <div class="crew-madness-cover" style=${getMadnessOpacity()}></div>
                    ${isSimpleGame ? " " : setAbilityLayer()}
                    <div class="crew-info">
                        <div class="crew-name re-text-center">${crewData.name}</div>
                        <ul class="traits-list">
                            ${
                            Object.keys(crewData.traits).map((trait:string, i:number) => html`
                                <li data-i=${i}> ${trait} </li>`)
                            }
                        </ul>
                    </div>
                    <div class=${isSimpleGame ? "re-display-none" : "crew-ability"}>
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
                    <img src="./images/crew/bkgrd/${crewData.img}.jpg" alt="Crew base image without ability">
                    <div class="crew-madness-cover" style=${getMadnessOpacity()}></div>
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