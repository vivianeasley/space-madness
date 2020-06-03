import {data} from './data-object'
import { produce } from "immer"
import { renderDOM } from "./renderDOM"

export let lastState = [];
lastState.push(data);

export function updateState (updateFucnt:any, skipRender?:boolean) {
    const nextState = produce(lastState[lastState.length - 1], updateFucnt);
    if (!skipRender) {
        renderDOM(nextState);
    }
    lastState.push(nextState);
    return true;
}

export function getCurrentState () {
    return lastState[lastState.length - 1];
}

export function getStateHistory() {
    return lastState;
}