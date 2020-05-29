import { html } from 'lighterhtml';
import { updateState } from './state-manager'

interface StateDataInterface {
    crew: any,
    missions: {
        lvlOne:any,
        lvlTwo:any,
        lvlThree:any,
    },
    players: any
 };

export function missionCard (cardData:StateDataInterface, missionId:string, level:string) { //dataObject:object
    const { missions } = cardData;
    const missionData = missions[level][missionId];

    function select () {
        // updateState((data:any)=>{data.missions[level][missionId].isSelected = !missionData.isSelected})
        updateState((data:any)=>{data.missions[level][missionId].failed = true})

        //// for testing
        // updateState((data:any)=>{
        //     data.crew[missionId].isActive = !missionData.isActive;
        //     data.crew[missionId].rolling = true;
        //     data.crew[missionId].die = 5;
        // })

    }

    function getBkgrdImage () {
        return `./images/missions/bkgrd/${missionData.imgBkgrd}.jpg`;
    }

    function getTargetFrame () {
        return `./images/missions/layer/${missionData.imgLayerFrame}.png`
    }

    function getTarget () {
        if (missionData.imgLayerTarget) return html`<img class="mission-target-img" src="./images/missions/layer/${missionData.imgLayerTarget}.png" alt="">`;
        return html`<div class="mission-target-num">${missionData.targetNumber}<div>`;

    }

    return html`
        <div class=${missionData.isSelected ? "mission-wrapper mission-selected" : "mission-wrapper"} onclick=${select}>
            <div class=${missionData.failed ? "mission-wrapper-inner" : "mission-wrapper-inner mission-inactive"}>
                <div class="mission-back">
                    <img class="mission-bkgrd" src=${getBkgrdImage()} alt="">
                    <img class="layer-target-box" src=${getTargetFrame()} alt="">
                    ${getTarget()}
                </div>
                <div class="mission-front">
                    <img class="mission-bkgrd" src=${getBkgrdImage()} alt="">
                    <img class="layer-target-box" src="./images/missions/layer/rule-roll-exactly.png" alt="">
                    <img class="mission-target-img" src="./images/missions/layer/die-roll-two-same.png" alt="">
                </div>
            </div>
        </div>
    `;
}