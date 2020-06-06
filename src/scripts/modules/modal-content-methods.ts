import { html } from 'lighterhtml';

// These methods that return various modal content
export namespace modalContentMethods {
    // Public methods
    export function Win () {
        return html`<h1>You win!</h1>`
    };

    export function MadnessLose () {
        return html`<h1>Sorry, you lost due to insanity!</h1>`
    };

    export function MissionLose () {
        return html`<h1>Sorry, you lost due to mission failure!</h1>`
    };

    export function FailedMission () {
        return html`<h1>You failed the mission! Start next round?</h1>`
    };

    export function RecoveredMission () {
        return html`<h1>You recovered the mission! Start next round?</h1>`
    };

    export function SuceededMission () {
        return html`<h1>You completed the mission! Start next round?</h1>`
    };

    export function rules () {
        return html`
            <h1>Objective:</h1>
            <p>Have your crew complete all the missions without driving each other insane.</p>
            <h1>How to Play:</h1>
            <p>Choose a mission card for your crew to attempt. Then choose 3-8 crew to send on that mission.</p>
            <p>Each crew has a special ability that can be applied to any crew's die to meet the missions requirements.</p>
            <p>If you fail a mission it turns face down along with crew that were on that mission. Crew that are face down can't use their abilities to complete a mission. If you succeed at a face down mission the card flips back over. If you fail a face down mission you lose the game. Face down crew on a successful mission or recovery flip face up and can use their abilities again.</p>
            <p>After each mission attempt crews triggers will be revealed if they worked with another crew member who had those traits. When a crew memeber has all 3 of their triggers revealed they go space mad, murder everone on the ship, and you lose the game</p>
            <p>When all missions are completed, the ship hasn't exploded, and your crew aren't space mad, you win the game.</p>
        `
    };

}