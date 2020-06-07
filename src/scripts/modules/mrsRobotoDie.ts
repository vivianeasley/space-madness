import { html } from 'lighterhtml';

export function mrsRobotoDie (roll:number, iterations:number, selected:boolean) {

    const sideDict = {
        1:"mr-dice-front-view",
        2:"mr-dice-right-view",
        3:"mr-dice-back-view",
        4:"mr-dice-left-view",
        5:"mr-dice-top-view",
        6:"mr-dice-bottom-view"
    }

    function rollLength () {
        return `animation-iteration-count: ${iterations};`;
    }

    return html`
        <div class=${selected ? "mr-view selected-die" : "mr-view"}>
            <div class="mr-dice ${sideDict[roll]}" style=${rollLength()}>
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