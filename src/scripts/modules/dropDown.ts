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
            const id = event.target.getAttribute("data-id");
            updateState((data:any)=>{data.gameUiData.currentCrewAbility = id;})
        }
    }


    return html`
        <select>
            ${
                activeCrew.map((crewId:string) => {
                    if (crewId !== currentCrewAbility && crewOnMission[crewId] === "active") {
                        return html`<option data-id=${crewId} onclick=${(e)=>{setCrewAbility(e)}}>${crew[crewId].name}</option>`;
                    } else if (crewId === currentCrewAbility) {
                        return html`<option data-id=${currentCrewAbility} selected onclick=${(e)=>{setCrewAbility(e)}}>${crew[currentCrewAbility].name}</option>`;
                    } else {
                        return null;
                    }
                })
            }
        </select>
    `;
}