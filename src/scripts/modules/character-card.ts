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
    const { crew, gameUiData } = cardData;
    const crewData = crew[crewId];
    const iterations = Math.floor(Math.random() * (3 - 1)) + 1;
    const isDieSelected = gameUiData.selectedDice.includes(crewId);

    function select () {
        if (gameUiData.phase === 1) {
            updateState((data:any)=>{
                if (data.crew[crewId].isSelected === true) {
                    data.gameUiData.selectedCrew.splice(data.gameUiData.selectedCrew.indexOf(crewId), 1);
                    data.crew[crewId].isSelected = false;
                } else {
                    data.gameUiData.selectedCrew.push(crewId);
                    data.crew[crewId].isSelected = true;
                }

            })
        } else if (gameUiData.phase === 3) {

            if (gameUiData.selectedDice.includes(crewId)) {
                updateState((data:any)=>{
                    data.gameUiData.selectedDice.splice(data.gameUiData.selectedDice.indexOf(crewId), 1);
                })
            } else {
                if (gameUiData.selectedCrew[gameUiData.currentCrewAbilityIndex] === "ambassadorAldren" &&
                gameUiData.selectedCrew.length < 2) {
                    console.log("aldren")
                    updateState((data:any)=>{data.gameUiData.selectedDice.push(crewId);})
                } else if (gameUiData.selectedCrew[gameUiData.currentCrewAbilityIndex] === "ltMojo") {
                    console.log("mojo")
                    updateState((data:any)=>{
                        data.gameUiData.mojoAbility = crewId;
                    })

                } else {
                    console.log("all other")
                    updateState((data:any)=>{data.gameUiData.selectedDice.push(crewId);})
                }
            }
        }
    }

    function getSelectedBanner () {
        if (crewData.isSelected) {
            return html`<div class="card-selected">SELECTED</div>`;
        }
    }

    function setAbilityLayer () {
        let abilityImg = crewData.img;
        if (crewId === "ltMojo" && gameUiData.mojoAbility) {
            abilityImg = crew[gameUiData.mojoAbility].img;
        }
        return html`<img class="layer-ability-box" src="./images/crew/layer/ability-${abilityImg}.png" alt="">`;

    }

    return html`
        ${ crewData.rolling ? die(crewData.die, iterations, isDieSelected) : '' }
        <div class="crew-wrapper" onclick=${select}>
            <div class=${crewData.isActive ? "crew-wrapper-inner" : "crew-wrapper-inner crew-inactive"}>
                <div class="crew-front">
                    ${getSelectedBanner()}
                    <img src="./images/crew/bkgrd/${crewData.img}.jpg" alt="">
                    ${setAbilityLayer()}
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
                        <div class="ability-text" style=${crewId === "ltMojo" && !gameUiData.mojoAbility ? "margin-left: 0px" : "margin-left: 50px"}>
                            ${()=>{
                                if (crewId === "ltMojo" && gameUiData.mojoAbility) {
                                    return crew[gameUiData.mojoAbility].abilityText;
                                } else {
                                    return crewData.abilityText;
                                }
                            }}
                        </div>
                    </div>
                </div>
                <div class="crew-back">
                    ${getSelectedBanner()}
                    <img src="./images/crew/bkgrd/${crewData.img}.jpg" alt="">
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