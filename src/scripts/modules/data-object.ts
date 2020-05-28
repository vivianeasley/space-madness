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
      "weapons": {
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
      "scienceBay": {
         "succeeded": false,
         "failed": false,
         "successCheck": "lvlThreeOver",
         "failCheck": "failLvlThree"
      },
      "powerCore": {
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
      "medicalBay": {
         "succeeded": false,
         "failed": false,
         "successCheck": "lvlThreeUnder",
         "failCheck": "failLvlThree"
      },
      "dockingBay": {
         "succeeded": false,
         "failed": false,
         "successCheck": "lvlOneNum",
         "failCheck": "failLvlOne"
      },
      "dormintory": {
         "succeeded": false,
         "failed": false,
         "successCheck": "lvlTwoNum",
         "failCheck": "failLvlTwo"
      },
      "engineRoom": {
         "succeeded": false,
         "failed": false,
         "successCheck": "lvlThreeNum",
         "failCheck": "failLvlThree"
      }
   },
   // Crew
   "crew": {
      "mrsRoboto": {
         "die": 1,
         "name": "Mrs. Roboto",
         "isSelected": false,
         "isActive": true,
         "abilityText": "Reroll any one die",
         "ability": "rerollOne",
         "drivesThemCrazy": [],
         "img": "mrs-roboto",
         "traits": [
            "negative",
            "self-centered",
            "fidgety"
         ]
      },
      "ambassadorAldren": {
         "die": 1,
         "name": "Ambassador Aldren",
         "isSelected": false,
         "isActive": true,
         "abilityText": "Reroll any two die",
         "ability": "rerollAll",
         "drivesThemCrazy": [],
         "img": "ambassador-alden",
         "traits": [
            "screams",
            "micromanager",
            "stubborn"
         ]
      },
      "lariLuckybeard": {
         "die": 1,
         "name": "Lari Luckybeard",
         "isSelected": false,
         "isActive": true,
         "abilityText": "Add one to a die",
         "ability": "addOne",
         "drivesThemCrazy": [],
         "img": "lari-luckybeard",
         "traits": [
            "space diva",
            "mummbles",
            "braggart"
         ]
      },
      "drJohnJohnson": {
         "die": 1,
         "name": "Dr. John Johnson",
         "isSelected": false,
         "isActive": true,
         "abilityText": "Add two to a die",
         "ability": "addTwo",
         "drivesThemCrazy": [],
         "img": "dr-john-johnson",
         "traits": [
            "nerd bully",
            "bad puns",
            "space nudist"
         ]
      },
      "subEnsignHammer": {
         "die": 1,
         "name": "Sub-ensign Hammer",
         "isSelected": false,
         "isActive": true,
         "abilityText": "Subtract one from a die",
         "ability": "subtractOne",
         "drivesThemCrazy": [],
         "img": "sub-ensign-hammer",
         "traits": [
            "lazy",
            "rude",
            "lecherous"
         ]
      },
      "eliTheStowaway": {
         "die": 1,
         "name": "Eli the Stowaway",
         "isSelected": false,
         "isActive": true,
         "abilityText": "Subtract two from a die",
         "ability": "subtractTwo",
         "drivesThemCrazy": [],
         "img": "eli-the-stowaway",
         "traits": [
            "humms loudly",
            "irrational",
            "ignores rules"
         ]
      },
      "pilotMoxyGoodwhistle": {
         "die": 1,
         "name": "Pilot Moxy Goodwhistle",
         "isSelected": false,
         "isActive": true,
         "abilityText": "Flip a die over",
         "ability": "flip",
         "drivesThemCrazy": [],
         "img": "moxy-goodwhistle",
         "traits": [
            "condescending",
            "space cultist",
            "compulsive liar"
         ]
      },
      "ltMojo": {
         "die": 1,
         "name": "Lt. Mojo",
         "isSelected": false,
         "isActive": true,
         "abilityText": "Use another crew members ability",
         "ability": "chooseAbility",
         "drivesThemCrazy": [],
         "img": "mojo",
         "traits": [
            "space fetishist",
            "pretentious",
            "entitled"
         ]
      }
   }
}
