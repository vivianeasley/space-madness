// These methods change dice rolls depending on crew ability used
export namespace abilityMethods {
    // Public methods
    export function rerollOne (diceRoll:number) {diceRoll = randInt(1, 6)};
    export function rerollTwo (diceRoll:number[]) {
        for (let i = 0; i < diceRoll.length; i++) {
            diceRoll[i] = randInt(1, 6);
        }
    };
    export function addOne (diceRoll:number) {diceRoll = diceRoll+1 > 6 ? 6 : diceRoll+1};
    export function addTwo (diceRoll:number) {diceRoll = diceRoll+2 > 6 ? 6 : diceRoll+2};
    export function subtractOne (diceRoll:number) {diceRoll = diceRoll-1 < 1 ? 1 : diceRoll-1};
    export function subtractTwo (diceRoll:number) {diceRoll = diceRoll-2 < 1 ? 1 : diceRoll-2};
    export function flip (diceRoll:number) {
        const rollDict = {1:6,2:5,3:4,4:3,5:2,6:1};
        diceRoll = rollDict[diceRoll];
    };
    export function otherAbility (diceRoll:number, chosenAbility:string) {
        if (chosenAbility !== "otherAbility") {
            abilityMethods[chosenAbility](diceRoll);
        }

    };

    // Private methods
    function randInt(min:number, max:number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}