import { html, svg } from 'lighterhtml';
import { updateState } from './state-manager';

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
    const { phase, helpText } = gameUiData;

    // set up selecting
    // remove disabled
    // prevent double click
    // start main game logic
    // add rules modal
    // fix mission selection bugs
    // show random story element
    // random not you turn you'll have to wait

    function submitButtons () {
        if (phase === 0) {
            return html`
            <div class="phases-ui">
                <button disabled>Submit Mission</button>
            </div>
            `
        } else if (phase === 1) {
            return html`
            <div class="phases-ui">
                <button>Submit Crew</button>
            </div>
            `
        } else if (phase === 1) {
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

    }

    function getCrewSubmit () {

    }

    function getAbilityTarget () {

    }

    function cancelAbilityTarget () {

    }

    return html`
        <div class="phases-tooltip-wrapper">
            <div class="tooltips">${helpIcon()}<span>${helpText[phase]} Need more help? Read the rules</span></div>
        </div>
        <div class="phases-direction-text">

        </div>
        ${submitButtons()}
    `;
}

function helpIcon () {
    return svg`<svg style="height: 20px; width: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z" fill="#ffffff" fill-opacity="0"></path><g class="" style="touch-action: none;" transform="translate(0,0)"><path d="M256 16C123.45 16 16 123.45 16 256s107.45 240 240 240 240-107.45 240-240S388.55 16 256 16zm0 60c99.41 0 180 80.59 180 180s-80.59 180-180 180S76 355.41 76 256 156.59 76 256 76zm0 30c-66.274 0-120 40.294-120 90 0 30 60 30 60 0 0-16.57 26.862-30 60-30 33.138 0 60 13.43 60 30s-30 15-60 30c-1.875.938-3.478 2.126-4.688 3.28C226.53 244.986 226 271.926 226 286v15c0 16.62 13.38 30 30 30 16.62 0 30-13.38 30-30v-15c0-45 90-40.294 90-90s-53.726-90-120-90zm0 240a30 30 0 0 0-30 30 30 30 0 0 0 30 30 30 30 0 0 0 30-30 30 30 0 0 0-30-30z" fill="#ffffff" fill-opacity="1"></path></g></svg>`
}