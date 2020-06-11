
import { data, storyElements } from './modules/data-object'
import { renderDOM } from "./modules/renderDOM"
import { setCrewTriggers } from "./modules/setCrewTriggers"

setMissionStory ()
setCrewTriggers(data);
preRenderDiceFaces()
renderDOM(data);

// TODO: break into module
function setMissionStory () {
    for (const column in data.missions) {
        for (const key in data.missions[column]) {
            data.missions[column][key].story = storyElements[Math.floor(Math.random() * storyElements.length)];
        }
    }
}

// TODO: break into module
function preRenderDiceFaces () {
    preloadImage("./images/die/one.png");
    preloadImage("./images/die/two.png");
    preloadImage("./images/die/three.png");
    preloadImage("./images/die/four.png");
    preloadImage("./images/die/five.png");
    preloadImage("./images/die/six.png");

    function preloadImage(url:string) {
        const img = new Image();
        img.src = url;
    }
}
