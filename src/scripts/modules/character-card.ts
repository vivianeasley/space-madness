import { html } from 'lighterhtml';
import { updateState } from './state-manager'
import { die } from './die'

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

export function characterCard (cardData:StateDataInterface, crewId:string) { //dataObject:object
    const { crew } = cardData;
    const crewData = crew[crewId];
    const iterations = getRandNum(1, 3);
    function select () {
        // updateState((data:any)=>{data.crew[crewId].isSelected = !crewData.isActive})

        //// for testing
        updateState((data:any)=>{
            data.crew[crewId].isActive = !crewData.isActive;
            data.crew[crewId].rolling = true;
            data.crew[crewId].die = 5;
        })

    }

    function getRandNum(min:number, max:number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function getBkgrdImage () {
        return `./images/crew/bkgrd/${crewData.img}.jpg`;
    }

    function getAbilityImage () {
        return `./images/crew/layer/ability-${crewData.img}.png`
    }

    return html`
        ${ crewData.rolling ? die(crewData.die, iterations) : '' }
        <div class=${crewData.isSelected ? "crew-wrapper crew-selected" : "crew-wrapper"} onclick=${select}>
            <div class=${crewData.isActive ? "crew-wrapper-inner" : "crew-wrapper-inner crew-inactive"}>
                <div class="crew-front">
                    <img src=${getBkgrdImage()} alt="">
                    <img class="layer-ability-box" src=${getAbilityImage()} alt="">
                    <div class="crew-info">
                        <div class="crew-name re-text-center">${crewData.name}</div>
                        <ul class="traits-list">
                            ${
                            crewData.traits.map((trait:string, i:number) => html`
                                <li data-i=${i}> ${trait} </li>`)
                            }
                        </ul>
                    </div>
                    <div class="crew-ability">
                        <div class="re-text-center re-text-bold">Ability</div>
                        <div class="ability-text" style=${crewData.img === "mojo" ? "margin-left: 0px" : "margin-left: 50px"}>
                            ${crewData.abilityText}
                        </div>
                    </div>
                </div>
                <div class="crew-back">
                    <img src=${getBkgrdImage()} alt="">
                    <div class="crew-info">
                        <div class="crew-name re-text-center">${crewData.name}</div>
                        <ul class="traits-list">
                            ${
                            crewData.traits.map((trait:string, i:number) => html`
                                <li data-i=${i}> ${trait} </li>`)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div style="text-align: left">
            <div class="trigger unknown-trigger"><img src="./images/icons/sight-disabled-black.png" alt="Hidden madness trigger icon"></div>
            <div class="trigger known-trigger">Compulsive Liar - Moxy Goodwistle</div>
            <div class="trigger partially-known-trigger">Moxy Goodwistle</div>
        </div>
    `;
}