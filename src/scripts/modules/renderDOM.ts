import { characterCard } from './character-card';
import { render, html } from 'lighterhtml';

const crewCards = document.querySelector(".crew-cards-wrapper");

export function renderDOM (state:any) {
    const { crew } = state;

    render(crewCards, html`${Object.keys(crew).map((crewId, i) => html`
       <div class="crew-grid-cell" data-i=${i}>${characterCard(state, crewId)}</div>
    `)}`);


}