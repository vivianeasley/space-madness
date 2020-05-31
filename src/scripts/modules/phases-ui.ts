import { html, svg } from 'lighterhtml';
import { updateState } from './state-manager';
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
    player:string
 };


export function phasesUi (stateData:StateDataInterface) {
    const { gameUiData } = stateData;
    const { phase,
        helpText,
        selectedCrew,
        currentCrewAbilityIndex,
        selectedMissionLvl,
        selectedMissionId } = gameUiData;



    // set up selecting
    // remove disabled
    // prevent double click

    // on crew submit generate chosen crew array & crew ability array under gameUI dat

    // start main game logic
    // add rules modal
    // fix mission selection bugs
    // show random story element
    // random not you turn you'll have to wait

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
        } else if (phase === 2) {
            return html`
            <div class="phases-ui">
                <button>Skip</button>
                <button>Apply</button>
            </div>
            `
        } else {
            console.log("Phase number wrong", phase)
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
        if (selectedCrew.length > 0) {

            updateState((data:any)=>{
                data.gameUiData.phase++;
                data.gameUiData.phaseChange = true;
                for (let i = 0; i < data.gameUiData.selectedCrew.length; i++) {
                    data.crew[data.gameUiData.selectedCrew[i]].rolling = true;
                    data.crew[data.gameUiData.selectedCrew[i]].die = (Math.floor(Math.random() * (6 - 1)) + 1);
                }
            });

        } else {
            alert("You must choose a least 3 crew to complete a mission");
        }
    }

    function useAbility () {

        if (gameUiData.selectedCrew[gameUiData.currentCrewAbilityIndex] === "ltMojo") {
            if (gameUiData.mojoAbility === undefined) {
                alert("You must choose another crew member for mojo's ability");
                return;
            }
            updateState((data:any)=>{data.gameUiData.currentCrewAbilityIndex++;});
            return;
        }

        // use ability on selected die
        // update numbers and currentCrewAbilityIndex on state


    }

    function cancelAbilityTarget () {

    }

    return html`
        <div class="phases-tooltip-wrapper">
            <div class="tooltips">${helpIcon()}<span>${helpText[phase].replace("%%", selectedCrew[currentCrewAbilityIndex])} Need more help? Read the rules</span></div>
        </div>
        <div class="phases-direction-text">

        </div>
        ${submitButtons()}
    `;
}

function helpIcon () {
    return svg`<svg style="height: 20px; width: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z" fill="#ffffff" fill-opacity="0"></path><g class="" style="touch-action: none;" transform="translate(0,0)"><path d="M256 16C123.45 16 16 123.45 16 256s107.45 240 240 240 240-107.45 240-240S388.55 16 256 16zm0 60c99.41 0 180 80.59 180 180s-80.59 180-180 180S76 355.41 76 256 156.59 76 256 76zm0 30c-66.274 0-120 40.294-120 90 0 30 60 30 60 0 0-16.57 26.862-30 60-30 33.138 0 60 13.43 60 30s-30 15-60 30c-1.875.938-3.478 2.126-4.688 3.28C226.53 244.986 226 271.926 226 286v15c0 16.62 13.38 30 30 30 16.62 0 30-13.38 30-30v-15c0-45 90-40.294 90-90s-53.726-90-120-90zm0 240a30 30 0 0 0-30 30 30 30 0 0 0 30 30 30 30 0 0 0 30-30 30 30 0 0 0-30-30z" fill="#ffffff" fill-opacity="1"></path></g></svg>`
}