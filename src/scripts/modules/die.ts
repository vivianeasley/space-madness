import { html } from 'lighterhtml';

export function die (roll:number, iterations:number, selected:boolean, id:string) {

    const sideDict = {
        1:"dice-front-view",
        2:"dice-right-view",
        3:"dice-back-view",
        4:"dice-left-view",
        5:"dice-top-view",
        6:"dice-bottom-view"
    }

    function rollLength () {
        return `animation-iteration-count: ${iterations};`;
    }

    function relayoutClass () {
        const randNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        return "relayout-aldren-die-" + randNum;
    }

    function getInner () {
        if (id === "ambassadorAldren") {
            return html`<div class="dice ${relayoutClass()} ${sideDict[roll]}" style=${rollLength()}>
                <div class="diceFace front"></div>
                <div class="diceFace right"></div>
                <div class="diceFace back"></div>
                <div class="diceFace left"></div>
                <div class="diceFace top"></div>
                <div class="diceFace bottom"></div>
            </div>`
        } else if (id === "mrsRoboto") {
            return html`<div class="dice ${relayoutClass()} ${sideDict[roll]}" style=${rollLength()}>
                <div class="diceFace front"></div>
                <div class="diceFace right"></div>
                <div class="diceFace back"></div>
                <div class="diceFace left"></div>
                <div class="diceFace top"></div>
                <div class="diceFace bottom"></div>
            </div>`
        } else {
            return html`<div class="dice ${sideDict[roll]}" style=${rollLength()}>
                <div class="diceFace front"></div>
                <div class="diceFace right"></div>
                <div class="diceFace back"></div>
                <div class="diceFace left"></div>
                <div class="diceFace top"></div>
                <div class="diceFace bottom"></div>
            </div>`
        }
    }

    return html`
        <div class=${selected ? "view selected-die" : "view"}>
            ${getInner()}
        </div>
    `;
}