
import { data, storyElements } from './modules/data-object'
import { renderDOM } from "./modules/renderDOM"
import { setCrewTriggers } from "./modules/setCrewTriggers"

setMissionStory ()
setCrewTriggers(data);
renderDOM(data);

// TODO: break into module
function setMissionStory () {
    for (const column in data.missions) {
        for (const key in data.missions[column]) {
            data.missions[column][key].story = storyElements[Math.floor(Math.random() * storyElements.length)];
        }
    }
}