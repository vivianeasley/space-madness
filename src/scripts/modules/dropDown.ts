import { html } from 'lighterhtml';
import { updateState } from './state-manager'

interface StateDataInterface {
    crew: any,
    missions: {
        lvlOne:any,
        lvlTwo:any,
        lvlThree:any,
    },
    gameUiData:any,
    player:any
 };

export function dropDown (stateData:StateDataInterface) {

    const { crew, gameUiData } = stateData;
    const { crewOnMission, currentCrewAbility } = gameUiData;
    let activeCrew = [];
    for ( const prop in crewOnMission ) {
        if (crewOnMission[prop] === "active") {
            activeCrew.push(prop)
        }
    }

    function setCrewAbility (event:any) {
        if (event) {
            const id = event.target.value;
            updateState((data:any)=>{
                data.gameUiData.currentCrewAbility = id;
                data.gameUiData.selectedDice = [];
            })
        }
    }


    return html`
        <select onchange=${(e)=>{setCrewAbility(e)}}>
            ${
                activeCrew.map((crewId:string) => {
                    if (crewId !== currentCrewAbility && crewOnMission[crewId] === "active") {
                        return html`<option value=${crewId}>${crew[crewId].name}</option>`;
                    } else if (crewId === currentCrewAbility) {
                        return html`<option value=${currentCrewAbility} selected>${crew[currentCrewAbility].name}</option>`;
                    } else {
                        return null;
                    }
                })
            }
        </select>
    `;
}