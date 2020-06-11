export function setCrewTriggers (dataObj:any) {
    const crewKeyArr = ["mrsRoboto", "mrsRoboto", "mrsRoboto", "ambassadorAldren", "ambassadorAldren", "ambassadorAldren", "lariLuckybeard", "lariLuckybeard", "lariLuckybeard", "drJohnJohnson", "drJohnJohnson", "drJohnJohnson", "subEnsignHammer", "subEnsignHammer", "subEnsignHammer", "eliTheStowaway", "eliTheStowaway", "eliTheStowaway", "pilotMoxyGoodwhistle", "pilotMoxyGoodwhistle", "pilotMoxyGoodwhistle", "ltMojo", "ltMojo", "ltMojo"].sort(() => Math.random() - 0.5);
    let usedTraits = [];
    let allTraits = [];
    let index = 0;


    // Bit of a brute force solution but insanely rare that this runs more than 2 times.
    triggerAssign();
    function triggerAssign () {
        recursiveTriggersAssign();
        if (usedTraits.length !== 24) {
            index++;
            usedTraits = [];
            allTraits = [];
            for (const crewIdKey in dataObj.crew) {
                dataObj.crew[crewIdKey].triggers = {};
            }
            triggerAssign();
        }
    }

    function recursiveTriggersAssign () {
        dataObj.player.crew = crewKeyArr[0];

        for (const prop in dataObj.crew) {
            for (const trait in dataObj.crew[prop].traits) {
                allTraits.push(trait);
            }
        }

        const allTriggersShuffled = allTraits.sort(() => Math.random() - 0.5);
        for (let j = 0; j < crewKeyArr.length; j++) {
            for (let k = 0; k < allTriggersShuffled.length; k++) {
                if (!usedTraits.includes(allTriggersShuffled[k]) && !dataObj.crew[crewKeyArr[j]].traits[allTriggersShuffled[k]]) {
                    dataObj.crew[crewKeyArr[j]].triggers[allTriggersShuffled[k]] = true;
                    usedTraits.push(allTriggersShuffled[k]);
                    break;
                }
            }
        }
    }
}