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

export function missionCard (cardData:StateDataInterface, missionId:string, level:string) {

    const { missions, gameUiData } = cardData;
    const missionData = missions[level][missionId];
    const cardKeysArr =  Object.keys(missions[level]);

    function select () {
        isTopCard();
        if (gameUiData.phase === 0 && isTopCard()) {
            updateState((data:any)=>{
                data.gameUiData.selectedMissionLvl = level;
                data.gameUiData.selectedMissionId = missionId;
            })
        }
    }

    function isTopCard () {
        for (let i = cardKeysArr.length-1; i > -1 ; i--) {
            if (missions[level][cardKeysArr[i]].succeeded === false) {
                if (cardKeysArr[i] === missionId) return true
                return false;
            }

        }

    }

    function getTarget () {
        if (missionData.imgLayerTarget) return html`<img class="mission-target-img" src="./images/missions/layer/${missionData.imgLayerTarget}.png" alt="">`;
        return html`<div class="mission-target-num">${missionData.targetNumber}<div>`;
    }

    function getSelectedBanner () {
        if (missionId === gameUiData.selectedMissionId) {
            return html`<div class="card-selected">SELECTED</div>`;
        }
    }

    return html`
        <div class="mission-wrapper" onclick=${select}>
            <div class=${!missionData.failed ? "mission-wrapper-inner" : "mission-wrapper-inner mission-failed"}>
                <div class="mission-front">
                    ${getSelectedBanner()}
                    <div class="mission-target-rule-text">Mission: ${missionData.targetRuleText}</div>
                    <img class=${ isTopCard () ? "mission-bkgrd" : ""} src="./images/missions/bkgrd/${missionData.imgBkgrd}.jpg" alt="">
                    <img class="layer-target-box" src="./images/missions/layer/${missionData.imgLayerFrame}.png" alt="">
                    ${getTarget()}
                </div>
                <div class="mission-back">
                    ${getSelectedBanner()}
                    <div class="mission-target-rule-text">Salvage: Roll two of a kind</div>
                    <img class=${ isTopCard () ? "mission-bkgrd" : ""} src="./images/missions/bkgrd/${missionData.imgBkgrd}.jpg" alt="">
                    <img class="layer-target-box" src="./images/missions/layer/rule-roll-exactly.png" alt="">
                    <img class="mission-target-img" src="./images/missions/layer/die-roll-two-same.png" alt="">
                </div>
            </div>
        </div>
    `;
}