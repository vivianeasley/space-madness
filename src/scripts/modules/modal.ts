import { html } from 'lighterhtml';
import { modalContentMethods } from './modal-content-methods'
import { updateState } from './state-manager'

export function modalWrapper (stateData:any) {
    const { gameUiData, missions, crew } = stateData;
    let { modalOpen, modalId, modalButtonText} = gameUiData;

    if (crewMemberMad() && gameUiData.modalId !== "madnessLose") {
        modalOpen = true;
        modalId = "madnessLose";
        modalButtonText = undefined;
    }

    if (missionsCompleted() && gameUiData.modalId !== "win") {
        modalOpen = true;
        modalId = "win";
        modalButtonText = undefined;
    }

    function missionsCompleted () { // TODO: Refactor remove levels
        let count = 0;
        for (const lvlOneProp in missions.lvlOne) {
            if (!missions.lvlOne[lvlOneProp].succeeded) count++;
        }
        for (const lvlTwoProp in missions.lvlTwo) {
            if (!missions.lvlTwo[lvlTwoProp].succeeded) count++;
        }
        for (const lvlThreeProp in missions.lvlThree) {
            if (!missions.lvlThree[lvlThreeProp].succeeded) count++;
        }

        if (count > 0) return false;
        return true;
    }

    function crewMemberMad () {
        for (const prop in crew) {
            if(isFullyTriggered(crew[prop].triggers)) return true;
        }
        return false;
        function isFullyTriggered (triggersObj:any) {
            let count = 0;
            for (const triggerProp in triggersObj) {
                if (triggersObj[triggerProp] === false) count++;
            }
            if (count > 2) return true;
            return false;
        }
    }

    function closeModal () {
        updateState((data:any)=>{
            data.gameUiData.modalOpen = false;
        })
    }

    return html`
        <div class=${modalOpen ? "modal-background" : "re-display-none"}>
            <div class="modal-content">
                <div class=${
                    modalId === "win" ||
                    modalId === "madnessLose" ||
                    modalId === "missionLose" ?
                    "re-display-none" :
                    "modal-close-icon"
                } onclick=${closeModal}>X</div>
                ${modalContentMethods[modalId]()}
                <div class=${modalButtonText ? "modal-buttons-wrapper" : "re-display-none"}>
                    <button  onclick=${closeModal}>${modalButtonText}</button>
                </div>
            </div>
        </div>

    `;
}