// These methods just check and return a bool depending on of the rols pass some criteria
export namespace checkMethods {
    // Public methods
    export function lvlOneOver (allRolls) {return allRolls.reduce((total:number, value:number) => total + value) > 5};
    export function lvlTwoOver (allRolls) {return allRolls.reduce((total:number, value:number) => total + value) > 11};
    export function lvlThreeOver (allRolls) {return allRolls.reduce((total:number, value:number) => total + value) < 18};
    export function lvlOneUnder (allRolls) {return allRolls.reduce((total:number, value:number) => total + value) < 12};
    export function lvlTwoUnder (allRolls) {return allRolls.reduce((total:number, value:number) => total + value) < 6};
    export function lvlThreeUnder (allRolls) {return allRolls.reduce((total:number, value:number) => total + value) < 6};
    export function lvlOneNum (allRolls) {return allRolls.includes(6)};
    export function lvlTwoNum (allRolls) {return allRolls.includes(4) && allRolls.includes(5)};
    export function lvlThreeNum (allRolls) {return allRolls.includes(1) && allRolls.includes(2) && allRolls.includes(3)};
    
    export function failLvlOne (allRolls) {return allRolls.filter((x:number) => x===4).length > 1};
    export function failLvlTwo (allRolls) {return allRolls.filter((x:number) => x===4).length > 2};
    export function failLvlThree (allRolls) {return allRolls.filter((x:number) => x===4).length > 3};
}