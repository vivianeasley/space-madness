export const data = {
   // Players
   "players": {
      "active": 0,
      "turnOrder": [
         "robert"
      ],
      "activeAbility": 0,
      "turnOrderAbility": [
         "robert"
      ],
      "robert": {
         "crew": "mrsroboto"
      }
   },
    // Missions for different parts of the ship
   "boardState": {
      "engineering": {
         "succeeded": false,
         "failed": false,
         "successCheck": "lvlOneOver",
         "failCheck": "failLvlOne"
      },
      "bridge": {
         "succeeded": false,
         "failed": false,
         "successCheck": "lvlTwoOver",
         "failCheck": "failLvlTwo"
      },
      "weapons": {
         "succeeded": false,
         "failed": false,
         "successCheck": "lvlThreeOver",
         "failCheck": "failLvlThree"
      },
      "medical": {
         "succeeded": false,
         "failed": false,
         "successCheck": "lvlOneUnder",
         "failCheck": "failLvlOne"
      },
      "messHall": {
         "succeeded": false,
         "failed": false,
         "successCheck": "lvlTwoUnder",
         "failCheck": "failLvlTwo"
      },
      "science": {
         "succeeded": false,
         "failed": false,
         "successCheck": "lvlThreeUnder",
         "failCheck": "failLvlThree"
      },
      "one": {
         "succeeded": false,
         "failed": false,
         "successCheck": "lvlOneNum",
         "failCheck": "failLvlOne"
      },
      "two": {
         "succeeded": false,
         "failed": false,
         "successCheck": "lvlTwoNum",
         "failCheck": "failLvlTwo"
      },
      "three": {
         "succeeded": false,
         "failed": false,
         "successCheck": "lvlThreeNum",
         "failCheck": "failLvlThree"
      }
   },
   // Crew
   "crew": {
      "mrsRoboto": {
         "ability": "rerollOne",
         "drivesThemCrazy": [],
         "traits": [
            "negative",
            "self-centered",
            "fidgety"
         ]
      },
      "ambassadorAldren": {
         "ability": "rerollAll",
         "drivesThemCrazy": [],
         "traits": [
            "random screams",
            "micromanager",
            "stubborn"
         ]
      },
      "lariLuckybeard": {
         "ability": "addOne",
         "drivesThemCrazy": [],
         "traits": [
            "space diva",
            "mummbles",
            "braggart"
         ]
      },
      "drJohnJohnson": {
         "ability": "addTwo",
         "drivesThemCrazy": [],
         "traits": [
            "nerd bully",
            "bad puns",
            "space nudist"
         ]
      },
      "subEnsignHammer": {
         "ability": "subtractOne",
         "drivesThemCrazy": [],
         "traits": [
            "lazy",
            "rude",
            "lecherous"
         ]
      },
      "eliTheStowaway": {
         "ability": "subtractTwo",
         "drivesThemCrazy": [],
         "traits": [
            "humms loudly",
            "irrational",
            "ignores rules"
         ]
      },
      "pilotMoxyGoodwhistle": {
         "ability": "flip",
         "drivesThemCrazy": [],
         "traits": [
            "condescending",
            "space cultist",
            "compulsive liar"
         ]
      },
      "ltMojo": {
         "ability": "chooseAbility",
         "drivesThemCrazy": [],
         "traits": [
            "space fetishist",
            "pretentious",
            "entitled"
         ]
      }
   }
}

