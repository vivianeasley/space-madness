import {data} from './data-object'
import { produce } from "immer"
import { renderDOM } from "./renderDOM"

let lastState = [];
lastState.push(data);

export function updateState (updateFucnt:any) {
    const nextState = produce(lastState[lastState.length - 1], updateFucnt);
    renderDOM(nextState);
    lastState.push(nextState);
    return true;
}