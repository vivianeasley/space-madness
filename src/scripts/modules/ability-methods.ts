// These methods change dice rolls depending on crew ability used
export namespace abilityMethods {
    // Public methods
    export function rerollOne (diceRoll:number) {return randInt(1, 6)};
    export function addOne (diceRoll:number) {return diceRoll+1};
    export function addTwo (diceRoll:number) {return diceRoll+2};
    export function subtractOne (diceRoll:number) {return diceRoll-1};
    export function subtractTwo (diceRoll:number) {return diceRoll-2};
    export function flip (diceRoll:number) {
        const rollDict = {1:6,2:5,3:4,4:3,5:2,6:1};
        return rollDict[diceRoll];
    };

    // Private methods
    function randInt(min:number, max:number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}