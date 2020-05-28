import { html } from 'lighterhtml';

export function die (roll:number) {
    const sideDict = {
        1:"dice-front-view",
        2:"dice-right-view",
        3:"dice-back-view",
        4:"dice-left-view",
        5:"dice-top-view",
        6:"dice-bottom-view"
    }

    function sideClass () {
        return `dice ${sideDict[roll]}`
    }

    return html`
        <div class="view">
            <div class=${sideClass()}>
                <div class="diceFace front"></div>
                <div class="diceFace right"></div>
                <div class="diceFace back"></div>
                <div class="diceFace left"></div>
                <div class="diceFace top"></div>
                <div class="diceFace bottom"></div>
            </div>
        </div>
    `;
}