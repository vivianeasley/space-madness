import { characterCard } from './character-card';
import { missionCard } from './mission-card';
import { phasesUi } from './phases-ui';
import { render, html } from 'lighterhtml';
import { modalWrapper } from './modal';
// import Typewriter from 'typewriter-effect/dist/core';



const crewCards = document.querySelector(".crew-cards-wrapper");
const missionCards = document.querySelector(".mission-cards-wrapper");
const phases = document.querySelector(".phases-wrapper");
const modals = document.querySelector(".modal-wrapper");
const history = document.querySelector(".history-wrapper");

export function renderDOM (state:any) {
    const { crew, missions, gameUiData } = state;
    const { gameHistory } = gameUiData;
    const { lvlOne, lvlTwo, lvlThree } = missions;

    render(missionCards, html`
        <div class=${ !isColumnEmptyCheck(lvlOne) ? "level-column" : "re-display-none"}>
            ${Object.keys(lvlOne).map((missionId, i) => {
                if (lvlOne[missionId].succeeded) return html`<span></span>`;
                return html`
                    <div class="mission-grid-cell" style="top:${i*20}px;" data-i=${i}>${missionCard(state, missionId, "lvlOne")}</div>
                `})}
        </div>
        <div class="level-column">
            ${Object.keys(lvlTwo).map((missionId, i) => {
                if (lvlTwo[missionId].succeeded) return html`<span></span>`;
                return html`
                    <div class="mission-grid-cell" style="top:${i*20}px;" data-i=${i}>${missionCard(state, missionId, "lvlTwo")}</div>
                `})}
        </div>
        <div class="level-column">
            ${Object.keys(lvlThree).map((missionId, i) => {
                if (lvlThree[missionId].succeeded) return html`<span></span>`;
                return html`
                    <div class="mission-grid-cell" style="top:${i*20}px;" data-i=${i}>${missionCard(state, missionId, "lvlThree")}</div>
                `})}
        </div>
    `);

    render(crewCards, html`${Object.keys(crew).map((crewId, i) => html`
       <div class="crew-grid-cell" data-i=${i}>${characterCard(state, crewId)}</div>
    `)}`);


    render(phases, html`${phasesUi(state)}`);

    render(history, html`
        <div class="game-history">
            <h2 class="re-white">Game History</h2>
            <ul>
                ${gameHistory.map((event, i) => {
                return html`
                    <li class="re-white" data-i=${i}>${event}</li>
                `})}
                </ul>
        </div>
        `)

    render(modals, html`${modalWrapper(state)}`);

    function isColumnEmptyCheck (lvlData:any) {
        for (const prop in lvlData) {
             if (lvlData[prop].succeeded === false) {
                 return false;
             }
        }
        return true;
     }

}