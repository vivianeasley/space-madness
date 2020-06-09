
import { data, storyElements } from './modules/data-object'
import { renderDOM } from "./modules/renderDOM"
import { setCrewTriggers } from "./modules/setCrewTriggers"

if (window.confirm("Would you like to play the simplified version of Space Madness?")) {
    data.gameUiData.isSimpleGame = true;
}
setMissionStory ()
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

function setMissionStory () {
    console.log(storyElements[Math.floor(Math.random() * storyElements.length)])
    for (const column in data.missions) {
        for (const key in data.missions[column]) {
            data.missions[column][key].story = storyElements[Math.floor(Math.random() * storyElements.length)];
        }
    }
}