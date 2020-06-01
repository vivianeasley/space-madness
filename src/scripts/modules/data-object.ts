export const data = {
   // Players
   "player": "Anonymous",
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
            "successCheck": "lvlTwoOver",
            "failCheck": "failLvlTwo"
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
            "successCheck": "lvlTwoUnder",
            "failCheck": "failLvlTwo"
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
            "successCheck": "lvlTwoNum",
            "failCheck": "failLvlTwo"
         }
      },
      "lvlThree": {
         "bridge": {
            "isSelected": false,
            "succeeded": false,
            "imgBkgrd": "bridge",
            "imgLayerFrame": "rule-less-than",
            "imgLayerTarget": undefined,
            "targetNumber": 4,
            "targetRuleText": "Roll total less than 4",
            "imgBack": "die-roll-two-same",
            "failed": false,
            "successCheck": "lvlTwoOver",
            "failCheck": "failLvlTwo"
         },
         "messHall": {
            "isSelected": false,
            "succeeded": false,
            "failed": false,
            "imgBkgrd": "mess-hall",
            "imgLayerFrame": "rule-less-than",
            "imgLayerTarget": undefined,
            "targetNumber": 7,
            "targetRuleText": "Roll total less than 7",
            "imgBack": "die-roll-two-same",
            "successCheck": "lvlTwoUnder",
            "failCheck": "failLvlTwo"
         },
         "dormitory": {
            "isSelected": false,
            "succeeded": false,
            "imgBkgrd": "dormitory",
            "imgLayerFrame": "rule-less-than",
            "imgLayerTarget": undefined,
            "targetNumber": 10,
            "targetRuleText": "Roll total less than 10",
            "imgBack": "die-roll-two-same",
            "failed": false,
            "successCheck": "lvlTwoNum",
            "failCheck": "failLvlTwo"
         },
      }
   },
   // Crew
   "crew": {
      "mrsRoboto": {
         "die": 1,
         "rolling": false,
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
         "rolling": false,
         "name": "Ambassador Aldren",
         "isSelected": false,
         "isActive": true,
         "abilityText": "Reroll any two die",
         "ability": "rerollTwo",
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
         "rolling": false,
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
         "rolling": false,
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
         "rolling": false,
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
         "rolling": false,
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
         "rolling": false,
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
         "rolling": false,
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
