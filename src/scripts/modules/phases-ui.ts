import { html, svg } from 'lighterhtml';
import { updateState, getCurrentState } from './state-manager';
import { abilityMethods } from './ability-methods';
import { checkMethods } from './check-methods';

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


export function phasesUi (stateData:StateDataInterface) {
    const { gameUiData, crew, missions, player } = stateData;
    const { phase,
        helpText,
        selectedCrew,
        currentCrewAbilityIndex,
        selectedMissionLvl,
        selectedMissionId,
        mojoAbility,
        selectedDice,
        turnOrder,
        activeTurn,
        directions } = gameUiData;

    function submitButtons () {
        if (phase === 0) {
            // if undefined
            return html`
            <div class="phases-ui">
                <button onclick=${getMissionSubmit} >Submit Mission</button>
            </div>
            `
        } else if (phase === 1) {
            return html`
            <div class="phases-ui">
                <button onclick=${getCrewSubmit}>Submit Crew</button>
            </div>
            `
        } else if (phase === 3) {
            return html`
            <div class="phases-ui">
                <button onclick=${skipAbilityTarget}>Skip</button>
                <button onclick=${useAbility}>Apply</button>
            </div>
            `
        }

    }

    function getMissionSubmit () {
        if (selectedMissionLvl && selectedMissionId) {
            updateState((data:any)=>{
                data.gameUiData.phase++;
                data.gameUiData.phaseChange = true;
            });
        } else {
            alert("You must choose a least 1 mission card");
        }
    }

    function getCrewSubmit () {
        if (selectedCrew.length > 2) {
            updateState((data:any)=>{
                data.gameUiData.phase++;
                data.gameUiData.phaseChange = true;
                for (let i = 0; i < data.gameUiData.selectedCrew.length; i++) {
                    data.crew[data.gameUiData.selectedCrew[i]].rolling = true;
                    data.crew[data.gameUiData.selectedCrew[i]].die = (Math.floor(Math.random() * (6 - 1)) + 1);
                }
            });

            let rollingWait = 1;
            for (let n = 0; n < selectedCrew.length; n++) {
                if (crew[selectedCrew[n]].animations > rollingWait) {
                    rollingWait = crew[selectedCrew[n]].animations;
                }
            }

            setTimeout(() => {
                if (isMissionSucceeded()) {
                    beginCleanUpPhase();
                } else {
                    updateState((data:any)=>{
                        data.gameUiData.phase++;
                        data.gameUiData.phaseChange = true;
                    });
                }

            }, rollingWait*1600);
        } else {
            alert("You must choose a least 3 crew to complete a mission");
        }
    }

    function useAbility () { // TODO: Clean this up

        if (selectedCrew[currentCrewAbilityIndex] === "ltMojo" && !mojoAbility) {
            alert("You must choose another crew member for mojo's ability");
        }

        if (selectedCrew[currentCrewAbilityIndex] === "ambassadorAldren") {
            if (!selectedCrew[currentCrewAbilityIndex + 1]) {
                updateState((data:any)=>{
                    for (let j = 0; j < data.gameUiData.selectedDice.length; j++) {
                        data.crew[data.gameUiData.selectedDice[j]].die = Math.floor(Math.random() * (6 - 1 + 1) + 1);
                    }
                });

                setTimeout(() => {
                    beginCleanUpPhase();
                }, 1000);

            } else {
                updateState((data:any)=>{
                    for (let j = 0; j < data.gameUiData.selectedDice.length; j++) {
                        data.crew[data.gameUiData.selectedDice[j]].die = Math.floor(Math.random() * (6 - 1 + 1) + 1);
                    }
                    data.gameUiData.currentCrewAbilityIndex++;
                    data.gameUiData.selectedDice = [];
                });
            }
            return;
        }

        if (selectedDice.length > 0) {
            let newRoll = 1;
            if (selectedCrew[currentCrewAbilityIndex] === "ltMojo") {
                newRoll = abilityMethods[crew[mojoAbility].ability](crew[selectedDice[0]].die);
            } else {
                newRoll = abilityMethods[crew[selectedCrew[currentCrewAbilityIndex]].ability](crew[selectedDice[0]].die);
            }
            if (newRoll > 6) newRoll = 6;
            if (newRoll < 1) newRoll = 1;
            if (!selectedCrew[currentCrewAbilityIndex + 1]) {
                updateState((data:any)=>{
                    data.crew[data.gameUiData.selectedDice[0]].die = newRoll;
                });

                setTimeout(() => {
                    beginCleanUpPhase();
                }, 1000);

            } else {
                updateState((data:any)=>{
                    data.crew[data.gameUiData.selectedDice[0]].die = newRoll;
                    data.gameUiData.currentCrewAbilityIndex++;
                    data.gameUiData.selectedDice = [];
                });

            }

        } else {
            alert("You must select a die")
        }
    }

    function skipAbilityTarget () {
        if (!selectedCrew[currentCrewAbilityIndex + 1]) {
            console.log("cleanup phase")
            beginCleanUpPhase();
        } else {
            updateState((data:any)=>{
                data.gameUiData.currentCrewAbilityIndex++;
                data.gameUiData.selectedDice = [];
            });
        }

    }

    function beginCleanUpPhase () {
        if (isMissionSucceeded()) {
           // check if last mission and failed == false
           // then win!
            updateState((data:any)=>{
                gameUiData.phase = 4;

                // reset missions
                if (data.missions[selectedMissionLvl][selectedMissionId].failed === true) {
                    data.missions[selectedMissionLvl][selectedMissionId].failed = false;
                } else {
                    data.missions[selectedMissionLvl][selectedMissionId].succeeded = true;
                }
                data.missions[selectedMissionLvl][selectedMissionId].isSelected = false;

                // reset game ui data
                data.gameUiData.currentCrewAbilityIndex = 0;
                data.gameUiData.selectedDice = [];
                data.gameUiData.selectedCrew = [];
                data.gameUiData.selectedMissionLvl = undefined;
                data.gameUiData.selectedMissionId = undefined;
                data.gameUiData.currentCrewAbilityIndex = 0;
                data.gameUiData.mojoAbility = undefined;

                // resetCrew
                let breakOut = false;
                for (let k = 0; k < selectedCrew.length; k++) {
                    for (const trigger in data.crew[selectedCrew[k]].triggers) {
                        if (breakOut) {
                            breakOut = false;
                            break;
                        }
                        for (let m = 0; m < selectedCrew.length; m++) {
                            if (selectedCrew[k] !== selectedCrew[m]) {
                                if (data.crew[selectedCrew[m]].traits[trigger]) {
                                    data.crew[selectedCrew[k]].triggers[trigger] = false;
                                    breakOut = true;
                                    break;
                                }
                            }
                        }

                    }

                    data.crew[selectedCrew[k]].die = 1;
                    data.crew[selectedCrew[k]].rolling = false;
                    data.crew[selectedCrew[k]].isSelected = false;
                    data.crew[selectedCrew[k]].isActive = true;

                }
            });

        } else if (!missions[selectedMissionLvl][selectedMissionId].failed) {
            updateState((data:any)=>{
                gameUiData.phase = 4;

                // reset missions
                data.missions[selectedMissionLvl][selectedMissionId].failed = true;
                data.missions[selectedMissionLvl][selectedMissionId].isSelected = false;

                // reset game ui data
                data.gameUiData.currentCrewAbilityIndex = 0;
                data.gameUiData.selectedDice = [];
                data.gameUiData.selectedCrew = [];
                data.gameUiData.selectedMissionLvl = undefined;
                data.gameUiData.selectedMissionId = undefined;
                data.gameUiData.currentCrewAbilityIndex = 0;
                data.gameUiData.mojoAbility = undefined;

                // resetCrew
                let breakOut = false;
                for (let k = 0; k < selectedCrew.length; k++) {
                    for (const trigger in data.crew[selectedCrew[k]].triggers) {
                        if (breakOut) {
                            breakOut = false;
                            break;
                        }
                        for (let m = 0; m < selectedCrew.length; m++) {
                            if (selectedCrew[k] !== selectedCrew[m]) {
                                if (data.crew[selectedCrew[m]].traits[trigger]) {
                                    data.crew[selectedCrew[k]].triggers[trigger] = false;
                                    breakOut = true;
                                    break;
                                }
                            }
                        }

                    }

                    data.crew[selectedCrew[k]].die = 1;
                    data.crew[selectedCrew[k]].rolling = false;
                    data.crew[selectedCrew[k]].isSelected = false;
                    data.crew[selectedCrew[k]].isActive = true;

                }
            });
            console.log("you failed the mission")
        } else {
            // if failed game loss!
            console.log("You lost the game!")
        }

        setTimeout(() => {
            updateState((data:any)=>{
                data.gameUiData.phase = 0;
                data.gameUiData.phaseChange = true;
            });
        }, 1000);
    }

    function isMissionSucceeded () {
        let rollsArr = [];
        let missionSuccess = false;
        const currentState = getCurrentState(); // TODO: Figure out why crew does not reflect current state at this point
        for (const prop in currentState.crew) {
            // only if selected crew
            if (currentState.crew[prop].die) rollsArr.push(currentState.crew[prop].die);
        }
        if (missions[selectedMissionLvl][selectedMissionId].failed && phase === 3) {
            if (checkMethods["recoverFail"](rollsArr, 2)) {
                console.log("you recovered from a fail!")
                missionSuccess = true;
                return missionSuccess;
            }
        } else {
            if (checkMethods[missions[selectedMissionLvl][selectedMissionId].successCheck](rollsArr)) {
                console.log("you succeeded!")
                missionSuccess = true;
                return missionSuccess;
            }
        }
        return missionSuccess;
    }

    function getDirectionsText () {
    // if mojo have special
        let directionsText = "Not currently your turn. Relax. Sit a spell.";
        if (turnOrder[activeTurn] === player.name) {
            directionsText = directions[phase];
        }
        if (selectedCrew[currentCrewAbilityIndex] === "ltMojo") {
            directionsText = "Choose a crew for Mojo to copy their ability";
        }
        return directionsText.replace("%%", selectedCrew[currentCrewAbilityIndex]);

    }

    return html`
        <div class="phases-tooltip-wrapper">
            <div class="tooltips">${helpIcon()}<span>${helpText[phase].replace("%%", selectedCrew[currentCrewAbilityIndex])} Need more help? Read the rules</span></div>
        </div>
        <div class="phases-direction-text">
            ${getDirectionsText()}
        </div>
        ${submitButtons()}
    `;
}

function helpIcon () {
    return svg`<svg style="height: 20px; width: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z" fill="#ffffff" fill-opacity="0"></path><g class="" style="touch-action: none;" transform="translate(0,0)"><path d="M256 16C123.45 16 16 123.45 16 256s107.45 240 240 240 240-107.45 240-240S388.55 16 256 16zm0 60c99.41 0 180 80.59 180 180s-80.59 180-180 180S76 355.41 76 256 156.59 76 256 76zm0 30c-66.274 0-120 40.294-120 90 0 30 60 30 60 0 0-16.57 26.862-30 60-30 33.138 0 60 13.43 60 30s-30 15-60 30c-1.875.938-3.478 2.126-4.688 3.28C226.53 244.986 226 271.926 226 286v15c0 16.62 13.38 30 30 30 16.62 0 30-13.38 30-30v-15c0-45 90-40.294 90-90s-53.726-90-120-90zm0 240a30 30 0 0 0-30 30 30 30 0 0 0 30 30 30 30 0 0 0 30-30 30 30 0 0 0-30-30z" fill="#ffffff" fill-opacity="1"></path></g></svg>`
}