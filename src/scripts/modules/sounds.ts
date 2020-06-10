import { html, svg } from 'lighterhtml';
import { updateState } from './state-manager'

export function music (isMusicPlaying:boolean) {

    function toggleAudio () {
        if (isMusicPlaying) {
            if (window.audioElement) window.audioElement.pause();
            updateState((data:any)=>{data.gameUiData.isMusicPlaying = false;})
            return;
        }
        if (window.audioContext.state === 'suspended') {
            window.audioContext.resume();
        } else if (window.audioElement) {
            window.audioElement.play();
        }



        updateState((data:any)=>{data.gameUiData.isMusicPlaying = true;})
    }

    return html`<div class="audio-icon" onclick=${toggleAudio}>
        ${isMusicPlaying ? getAudioIcon() : getNoAudioIcon()}
    </div>`;
}

function getNoAudioIcon () {
    return svg`<svg style="height: 25px; width: 25px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="0"></path><g style="touch-action: none;" transform="translate(0,0)"><path d="M275.5 96l-96 96h-96v128h96l96 96V96zm50.863 89.637l-12.726 12.726L371.273 256l-57.636 57.637 12.726 12.726L384 268.727l57.637 57.636 12.726-12.726L396.727 256l57.636-57.637-12.726-12.726L384 243.273l-57.637-57.636z" fill="#000" fill-opacity="1"></path></g></svg>`
}

function getAudioIcon () {
    return svg`<svg style="height: 25px; width: 25px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 0h512v512H0z" fill="#000" fill-opacity="0"></path><g style="touch-action: none;" transform="translate(0,0)"><path fill="#000" fill-opacity="1" d="M275.5 96l-96 96h-96v128h96l96 96V96zm50.863 89.637l-12.726 12.726L371.273z"></path></g></svg>`
}