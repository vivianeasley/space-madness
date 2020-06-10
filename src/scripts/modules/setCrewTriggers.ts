export function setCrewTriggers (dataObj:any) {
    const allTraits = [];
    const crewKeyArr = ["mrsRoboto", "mrsRoboto", "mrsRoboto", "ambassadorAldren", "ambassadorAldren", "ambassadorAldren", "lariLuckybeard", "lariLuckybeard", "lariLuckybeard", "drJohnJohnson", "drJohnJohnson", "drJohnJohnson", "subEnsignHammer", "subEnsignHammer", "subEnsignHammer", "eliTheStowaway", "eliTheStowaway", "eliTheStowaway", "pilotMoxyGoodwhistle", "pilotMoxyGoodwhistle", "pilotMoxyGoodwhistle", "ltMojo", "ltMojo", "ltMojo"].sort(() => Math.random() - 0.5);
    const usedTraits = [];

    dataObj.player.crew = crewKeyArr[0];

    for (const prop in dataObj.crew) {
        for (const trait in dataObj.crew[prop].traits) {
            allTraits.push(trait);
        }
    }

    const allTraitsShuffled = allTraits.sort(() => Math.random() - 0.5);
    for (let j = 0; j < crewKeyArr.length; j++) {
        for (let k = 0; k < allTraitsShuffled.length; k++) {
            if (!usedTraits.includes(allTraitsShuffled[k]) && !dataObj.crew[crewKeyArr[j]].traits[allTraitsShuffled[k]]) {
                dataObj.crew[crewKeyArr[j]].triggers[allTraitsShuffled[k]] = true;
                usedTraits.push(allTraitsShuffled[k]);
                break;
            }
        }
    }
}