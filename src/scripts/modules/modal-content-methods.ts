import { html } from 'lighterhtml';

// These methods that return various modal content
export namespace modalContentMethods {
    // Public methods
    export function win () {
        return html`
        <h2 class="modal-h2-spacing">You won Space Madness the game!</h2>
        <p>You might expect more than a pat on the back but space managment is a thankless profession. Until next time, avoid peoples triggers and keep watching the stars! To start another game reload the page.</p>
        <img src="./images/modal-content/game-cover.jpg" alt="Space Madness title image">
        `
    };

    export function madnessLose () {
        return html`
            <h2 class="modal-h2-spacing">Sorry, you lost due to insanity!</h2>
            <img class="modal-aldren-image" src="./images/modal-content/aldren-image.jpg" alt="Mrs. Roboto going mad and attacking Ambassador Aldren">
            `
    };

    export function missionLose () {
        return html`
        <h2 class="modal-h2-spacing">Sorry, you lost due to mission failure!</h2>
        <img src="./images/modal-content/ship-explode.jpg" alt="Space ship exploding image">
        `
    };

    export function failedMission () {
        return html`
            <h2 class="modal-h2-spacing">You failed the mission! Tensions rise!</h2>
            <img class="modal-aldren-image" src="./images/modal-content/hammer-image.jpg" alt="Space Madness title image">
        `
    };

    export function suceededMission () {
        return html`
            <h2 class="modal-h2-spacing">Success! Your crew was up to the challenge!</h2>
            <img class="modal-aldren-image" src="./images/modal-content/moxy-image.jpg" alt="Pilot moxy saluting">
            `
    };

    export function rules () {
        return html`
            <img src="./images/modal-content/title.jpg" alt="Space Madness title image">
            <h2 class="modal-h2-spacing">Objective:</h2>
            <p class="modal-paragraph">Have your crew complete all the missions without driving each other insane.</p>
            <h2 class="modal-h2-spacing">How to Play:</h2>
            <p class="modal-paragraph">Choose a mission card for your crew to attempt. Then choose 3-8 crew to send on that mission.</p>
            <p class="modal-paragraph">Each crew has a special ability that can be applied to any crew's die to meet the missions requirements.</p>
            <p class="modal-paragraph">If you fail a mission it turns face down along with the crew that were on that mission. Crew that are face down can't use their abilities to complete a mission. If you succeed at a face down mission card it flips back over. If you fail a face down mission you lose the game. Face down crew on any successful mission flip face up and can use their abilities again.</p>
            <p class="modal-paragraph">After each mission attempt crews triggers will be revealed if they worked with another crew member who had those traits. When a crew memeber has all 3 of their triggers revealed they go space mad, murder everone on the ship, and you lose the game</p>
            <p class="modal-paragraph">You have some information about one crew member chosen at random each game. You know who drives them crazy but you don't know which traits are triggers.</p>
            <p class="modal-paragraph">When all missions are completed, the ship hasn't exploded, and none of the crew are space mad, you win the game.</p>
        `
    };

}