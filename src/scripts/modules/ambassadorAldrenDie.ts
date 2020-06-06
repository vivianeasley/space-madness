import { html } from 'lighterhtml';

export function ambassadorAldrenDie (roll:number, iterations:number, selected:boolean) {

    const sideDict = {
        1:"aa-dice-front-view",
        2:"aa-dice-right-view",
        3:"aa-dice-back-view",
        4:"aa-dice-left-view",
        5:"aa-dice-top-view",
        6:"aa-dice-bottom-view"
    }

    function rollLength () {
        return `animation-iteration-count: ${iterations};`;
    }

    return html`
        <div class=${selected ? "view selected-die" : "view"}>
            <div class="dice ${sideDict[roll]}" style=${rollLength()}>
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