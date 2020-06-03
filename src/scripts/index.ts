
import { data } from './modules/data-object'
import { renderDOM } from "./modules/renderDOM"
import { setCrewTriggers } from "./modules/setCrewTriggers"

let index = 0
recursiveGameSetup()

function recursiveGameSetup () {
    index++;
    if (index > 20) {
        console.log("Error: Somehow recursiveGameSetup infinite looped.")
        return;
    }
    for (const prop in data.crew) {
        if (Object.keys(data.crew[prop].triggers).length !== 3) {
            for (const prop in data.crew) {
                data.crew[prop].triggers = {};
            }
            setCrewTriggers(data);
            recursiveGameSetup();
            return;
        }
    }
    renderDOM(data);
}