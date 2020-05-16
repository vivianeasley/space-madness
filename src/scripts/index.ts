import {checkMethods} from './modules/check-methods'
import {abilityMethods} from './modules/ability-methods'
import {data} from './modules/data-object'

test(checkMethods)
function test (checkMethods:object) {
    console.log("test", checkMethods["lvlOneOver"]([5, 4, 6, 7]))
}
