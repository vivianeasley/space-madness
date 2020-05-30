import { characterCard } from './character-card';
import { missionCard } from './mission-card';
import { phasesUi } from './phases-ui';
import { render, html } from 'lighterhtml';
import Typewriter from 'typewriter-effect/dist/core';
import { updateState } from './state-manager'


const crewCards = document.querySelector(".crew-cards-wrapper");
const missionCards = document.querySelector(".mission-cards-wrapper");
const phases = document.querySelector(".phases-wrapper");

export function renderDOM (state:any) {
    const { crew, missions, gameUiData, player } = state;
    const { lvlOne, lvlTwo, lvlThree } = missions;
    const { phase, activeTurn, turnOrder, directions, phaseChange } = gameUiData;

    render(missionCards, html`
        <div class="level-column">
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

    if (phaseChange) {
        render(phases, html`${phasesUi(state)}`);

        let directionsText = "Not currently your turn. Relax. Sit a spell.";
        if (turnOrder[activeTurn] === player) {
            directionsText = directions[phase];
        }

        setTimeout(() => {
            new Typewriter(".phases-direction-text" , {
                strings: directionsText,
                delay: 50,
                autoStart: true,
                });
        }, 1000);

        updateState((state:any)=>{state.gameUiData.phaseChange = false}, false)
    }






}