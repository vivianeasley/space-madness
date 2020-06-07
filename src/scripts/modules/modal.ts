import { html } from 'lighterhtml';
import { modalContentMethods } from './modal-content-methods'
import { updateState } from './state-manager'

export function modalWrapper (stateData:any) {
    const { gameUiData } = stateData;
    const { modalOpen, modalId, modalButtonText} = gameUiData;

    function closeModal () {
        updateState((data:any)=>{
            data.gameUiData.modalOpen = false;
        })
    }

    return html`
        <div class=${modalOpen ? "modal-background" : "re-display-none"}>
            <div class="modal-content">
                <div class="modal-close-icon" onclick=${closeModal}>X</div>
                ${modalContentMethods[modalId]()}
                <div class=${modalButtonText ? "modal-buttons-wrapper" : "re-display-none"}>
                    <button  onclick=${closeModal}>${modalButtonText}</button>
                </div>
            </div>
        </div>

    `;
}