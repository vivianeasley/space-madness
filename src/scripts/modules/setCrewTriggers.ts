export function setCrewTriggers (dataObj:any) {
    const allTraits = [];
    const crewKeyArr = ["mrsRoboto", "ambassadorAldren", "lariLuckybeard", "drJohnJohnson", "subEnsignHammer", "eliTheStowaway", "pilotMoxyGoodwhistle", "ltMojo"].sort(() => Math.random() - 0.5);

    dataObj.player.crew = crewKeyArr[0];

    for (const prop in dataObj.crew) {
        for (const trait in dataObj.crew[prop].traits) {
            allTraits.push(trait);
        }
    }

    const allTraitsShuffled = allTraits.sort(() => Math.random() - 0.5);

    for (let j = 0; j < crewKeyArr.length; j++) {
        for (let k = j*3; k < allTraitsShuffled.length; k++) {
            if (!dataObj.crew[crewKeyArr[j]].traits[allTraitsShuffled[k]]) {
                dataObj.crew[crewKeyArr[j]].triggers[allTraitsShuffled[k]] = true;
            }
            if (Object.keys(dataObj.crew[crewKeyArr[j]].triggers).length > 2) break;
        }
    }
}