export const data = {
   // Players
   "player": {
      "name":"Anonymous",
      "crew":undefined
   },
   "gameUiData": {
      "phaseChange": true,
      "phase": 0,
      "activeTurn": 0,
      "turnOrder": [
         "Anonymous"
      ],
      "selectedDice": [],
      "selectedCrew": [],
      "selectedMissionLvl": undefined,
      "selectedMissionId": undefined,
      "currentCrewAbilityIndex": 0,
      "mojoAbility": undefined,
      "helpText": [
         "Click on a mission card at the top of the page and then click the submit button in the bottom right.",
         "Click on a crew card and then click the submit button in the bottom right.",
         "Wait a second, dice are rolling",
         "To apply %%'s ability to a dice roll, click the die you would like to change and then click submit. You may also skip using this ability by clicking the skip button",
         "Wait for game to manage prep for next round"
      ],
      "directions": [
         "Choose a mission to attempt",
         "Choose crew to attempt the mission",
         "Rolling...",
         "Apply %%'s ability to a crew's die?",
         "Clean up phase..."
      ],
      "players": {
         "Anonymous": "mrsroboto"
      }

   },
    // Missions for different parts of the ship
   "missions": {
      "lvlOne": {
         "weapons": {
            "isSelected": false,
            "succeeded": false,
            "imgBkgrd": "weapons",
            "imgLayerFrame": "rule-greater-than",
            "imgLayerTarget": undefined,
            "targetNumber": 15,
            "targetRuleText": "Roll total greater than 15",
            "imgBack": "die-roll-two-same",
            "failed": false,
            "successCheck": "lvlThreeOver",
            "failCheck": "failLvlOne"
         },
         "powerCore": {
            "isSelected": false,
            "succeeded": false,
            "imgBkgrd": "power-core",
            "imgLayerFrame": "rule-greater-than",
            "imgLayerTarget": undefined,
            "targetNumber": 10,
            "targetRuleText": "Roll total greater than 10",
            "imgBack": "die-roll-two-same",
            "failed": false,
            "successCheck": "lvlTwoOver",
            "failCheck": "failLvlOne"
         },
         "dockingBay": {
            "isSelected": false,
            "succeeded": false,
            "imgBkgrd": "docking-bay",
            "imgLayerFrame": "rule-greater-than",
            "imgLayerTarget": undefined,
            "targetNumber": 5,
            "targetRuleText": "Roll total greater than 5",
            "imgBack": "die-roll-two-same",
            "failed": false,
            "successCheck": "lvlOneOver",
            "failCheck": "failLvlOne"
         },
      },
      "lvlTwo": {
         "scienceBay": {
            "isSelected": false,
            "succeeded": false,
            "imgBkgrd": "science-bay",
            "imgLayerFrame": "rule-roll-exactly",
            "imgLayerTarget": "die-roll-one-two-three",
            "targetNumber": undefined,
            "targetRuleText": "Roll a 1, 2, and 3",
            "imgBack": "die-roll-two-same",
            "failed": false,
            "successCheck": "lvlThreeNum",
            "failCheck": "failLvlOne"
         },
         "medicalBay": {
            "isSelected": false,
            "succeeded": false,
            "imgBkgrd": "medical-bay",
            "imgLayerFrame": "rule-roll-exactly",
            "imgLayerTarget": "die-roll-four-five",
            "targetNumber": undefined,
            "targetRuleText": "Roll a 4, and 5",
            "imgBack": "die-roll-two-same",
            "failed": false,
            "successCheck": "lvlTwoNum",
            "failCheck": "failLvlOne"
         },
         "engineRoom": {
            "isSelected": false,
            "succeeded": false,
            "imgBkgrd": "engine-room",
            "imgLayerFrame": "rule-roll-exactly",
            "imgLayerTarget": "die-roll-six",
            "targetNumber": undefined,
            "targetRuleText": "Roll a 6",
            "imgBack": "die-roll-two-same",
            "failed": false,
            "successCheck": "lvlOneNum",
            "failCheck": "failLvlOne"
         }
      },
      "lvlThree": {
         "bridge": {
            "isSelected": false,
            "succeeded": false,
            "imgBkgrd": "bridge",
            "imgLayerFrame": "rule-less-than",
            "imgLayerTarget": undefined,
            "targetNumber": 6,
            "targetRuleText": "Roll total less than 6",
            "imgBack": "die-roll-two-same",
            "failed": false,
            "successCheck": "lvlThreeUnder",
            "failCheck": "failLvlOne"
         },
         "messHall": {
            "isSelected": false,
            "succeeded": false,
            "failed": false,
            "imgBkgrd": "mess-hall",
            "imgLayerFrame": "rule-less-than",
            "imgLayerTarget": undefined,
            "targetNumber": 8,
            "targetRuleText": "Roll total less than 8",
            "imgBack": "die-roll-two-same",
            "successCheck": "lvlTwoUnder",
            "failCheck": "failLvlOne"
         },
         "dormitory": {
            "isSelected": false,
            "succeeded": false,
            "imgBkgrd": "dormitory",
            "imgLayerFrame": "rule-less-than",
            "imgLayerTarget": undefined,
            "targetNumber": 12,
            "targetRuleText": "Roll total less than 12",
            "imgBack": "die-roll-two-same",
            "failed": false,
            "successCheck": "lvlOneUnder",
            "failCheck": "failLvlOne"
         },
      }
   },
   // Crew
   "crew": {
      "mrsRoboto": {
         "die": 1,
         "rolling": false,
         "animations": 2,
         "name": "Mrs. Roboto",
         "isSelected": false,
         "isActive": true,
         "abilityText": "Reroll any one die",
         "ability": "rerollOne",
         "triggers": {},
         // "revealedTriggers": [],
         "img": "mrs-roboto",
         "traits": {
            "negative": true,
            "self-centered": true,
            "fidgety": true
         }
      },
      "ambassadorAldren": {
         "die": 1,
         "rolling": false,
         "animations": 4,
         "name": "Ambassador Aldren",
         "isSelected": false,
         "isActive": true,
         "abilityText": "Reroll any two die",
         "ability": "rerollTwo",
         "triggers": {},
         // "revealedTriggers": [],
         "img": "ambassador-alden",
         "traits": {
            "screams": true,
            "micromanager": true,
            "stubborn": true
         }
      },
      "lariLuckybeard": {
         "die": 1,
         "rolling": false,
         "animations": 3,
         "name": "Lari Luckybeard",
         "isSelected": false,
         "isActive": true,
         "abilityText": "Add one to a die",
         "ability": "addOne",
         "triggers": {},
         // "revealedTriggers": [],
         "img": "lari-luckybeard",
         "traits": {
            "space diva": true,
            "mummbles": true,
            "braggart": true
         }
      },
      "drJohnJohnson": {
         "die": 1,
         "rolling": false,
         "animations": 1,
         "name": "Dr. John Johnson",
         "isSelected": false,
         "isActive": true,
         "abilityText": "Add two to a die",
         "ability": "addTwo",
         "triggers": {},
         // "revealedTriggers": [],
         "img": "dr-john-johnson",
         "traits": {
            "nerd bully": true,
            "bad puns": true,
            "space nudist": true
         }
      },
      "subEnsignHammer": {
         "die": 1,
         "rolling": false,
         "animations": 2,
         "name": "Sub-ensign Hammer",
         "isSelected": false,
         "isActive": true,
         "abilityText": "Subtract one from a die",
         "ability": "subtractOne",
         "triggers": {},
         // "revealedTriggers": [],
         "img": "sub-ensign-hammer",
         "traits": {
            "lazy": true,
            "rude": true,
            "lecherous": true
         }
      },
      "eliTheStowaway": {
         "die": 1,
         "rolling": false,
         "animations": 4,
         "name": "Eli the Stowaway",
         "isSelected": false,
         "isActive": true,
         "abilityText": "Subtract two from a die",
         "ability": "subtractTwo",
         "triggers": {},
         // "revealedTriggers": [],
         "img": "eli-the-stowaway",
         "traits": {
            "humms loudly": true,
            "irrational": true,
            "ignores rules": true
         }
      },
      "pilotMoxyGoodwhistle": {
         "die": 1,
         "rolling": false,
         "animations": 1,
         "name": "Pilot Moxy Goodwhistle",
         "isSelected": false,
         "isActive": true,
         "abilityText": "Flip a die over",
         "ability": "flip",
         "triggers": {},
         // "revealedTriggers": [],
         "img": "moxy-goodwhistle",
         "traits": {
            "condescending": true,
            "space cultist": true,
            "compulsive liar": true
         }
      },
      "ltMojo": {
         "die": 1,
         "rolling": false,
         "animations": 3,
         "name": "Lt. Mojo",
         "isSelected": false,
         "isActive": true,
         "abilityText": "Use another crew members ability",
         "ability": "chooseAbility",
         "triggers": {},
         // "revealedTriggers": [],
         "img": "mojo",
         "traits": {
            "space fetishist": true,
            "pretentious": true,
            "entitled": true
         }
      }
   }
}
