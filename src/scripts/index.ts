
import { data } from './modules/data-object'
import { renderDOM } from "./modules/renderDOM"
let index = 0
recursiveGameSetup()

function recursiveGameSetup () {
    index++;
    if (index > 20) {
        console.log("Somehow recursiveGameSetup infinite looped")
        return;
    }
    for (const prop in data.crew) {
        if (data.crew[prop].triggers.length !== 3) {
            for (const prop in data.crew) {
                data.crew[prop].triggers = [];
            }
            setAllTriggers(data);
            recursiveGameSetup();
            return;
        }
    }
    renderDOM(data);
}

function setAllTriggers (dataObj:any) {
    // Move to own module
    const playerName = "anonymous"
    const allTraits = [];
    const crewKeyArr = ["mrsRoboto", "ambassadorAldren", "lariLuckybeard", "drJohnJohnson", "subEnsignHammer", "eliTheStowaway", "pilotMoxyGoodwhistle", "ltMojo"].sort(() => Math.random() - 0.5);

    dataObj.player.crew = crewKeyArr[0];

    for (const prop in dataObj.crew) {
        for (let i = 0; i < dataObj.crew[prop].traits.length; i++) {
            allTraits.push(dataObj.crew[prop].traits[i]);
        }
    }

    const allTraitsShuffled = allTraits.sort(() => Math.random() - 0.5);

    for (let j = 0; j < crewKeyArr.length; j++) {
        for (let k = j*3; k < allTraitsShuffled.length; k++) {
            if (!dataObj.crew[crewKeyArr[j]].traits.includes(allTraitsShuffled[k])) {
                dataObj.crew[crewKeyArr[j]].triggers.push(allTraitsShuffled[k])
            }
            if (dataObj.crew[crewKeyArr[j]].triggers.length > 2) break;
        }
    }
}
// Write game loop logic here



// import {checkMethods} from './modules/check-methods'
// import {abilityMethods} from './modules/ability-methods'

// test(checkMethods)
// function test (checkMethods:object) {
//     console.log("test", checkMethods["lvlOneOver"]([5, 4, 6, 7]));


// }