import { characterCard } from './character-card';
import { missionCard } from './mission-card';
import { render, html } from 'lighterhtml';

const crewCards = document.querySelector(".crew-cards-wrapper");
const missionCards = document.querySelector(".mission-cards-wrapper");

export function renderDOM (state:any) {
    const { crew, missions } = state;
    const { lvlOne } = missions;

    render(missionCards, html`
        <div class="level-one-column">
            ${Object.keys(lvlOne).map((missionId, i) => {
                if (lvlOne[missionId].succeeded) return html`<span></span>`;
                return html`
                    <div class="mission-grid-cell" style="top:${i*20}px;" data-i=${i}>${missionCard(state, missionId, "lvlOne")}</div>
                `})}
        </div>
    `);

    render(crewCards, html`${Object.keys(crew).map((crewId, i) => html`
       <div class="crew-grid-cell" data-i=${i}>${characterCard(state, crewId)}</div>
    `)}`);


}