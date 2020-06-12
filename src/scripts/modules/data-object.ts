export const data = {
   // Players
   "player": {
      "name":"Anonymous",
      "crew":undefined
   },
   "gameUiData": {
      "isSimpleGame": false,
      "lost": false,
      "modalOpen": true,
      "modalId": "chooseGameType",
      "modalButtonText": undefined,
      "phaseChange": true,
      "phase": 0,
      "activeTurn": 0,
      "turnOrder": [
         "Anonymous"
      ],
      "selectedDice": [],
      "crewOnMission": {},
      "selectedMissionLvl": undefined,
      "selectedMissionId": undefined,
      "currentCrewAbility": undefined,
      "lastAbilityUsed": undefined,
      "mojoAbility": undefined,
      "players": {
         "Anonymous": "mrsroboto"
      }
   },
    // Missions for different parts of the ship
   "missions": {
      "lvlOne": {
         "weapons": {
            "simpleMissionTarget": 5,
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
            "name": "Weapons",
            "story": ""
         },
         "powerCore": {
            "simpleMissionTarget": 4,
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
            "name": "Power Core",
            "story": ""
         },
         "dockingBay": {
            "simpleMissionTarget": 3,
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
            "name": "Docking Bay",
            "story": ""
         },
      },
      "lvlTwo": {
         "scienceBay": {
            "simpleMissionTarget": 5,
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
            "name": "Science Bay",
            "story": ""
         },
         "medicalBay": {
            "simpleMissionTarget": 4,
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
            "name": "Medical Bay",
            "story": ""
         },
         "engineRoom": {
            "simpleMissionTarget": 3,
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
            "name": "Engine Room",
            "story": ""
         }
      },
      "lvlThree": {
         "bridge": {
            "simpleMissionTarget": 5,
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
            "name": "Bridge",
            "story": ""
         },
         "messHall": {
            "simpleMissionTarget": 4,
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
            "name": "Mess Hall",
            "story": ""
         },
         "dormitory": {
            "simpleMissionTarget": 3,
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
            "name": "Dormitory",
            "story": ""
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
         "isActive": "active",
         "abilityText": "Reroll any one die",
         "ability": "rerollOne",
         "triggers": {},
         "img": "mrs-roboto",
         "madnessLevel": 0,
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
         "isActive": "active",
         "abilityText": "Reroll any two dice",
         "ability": "rerollTwo",
         "triggers": {},
         "img": "ambassador-alden",
         "madnessLevel": 0,
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
         "isActive": "active",
         "abilityText": "Add one to a die",
         "ability": "addOne",
         "triggers": {},
         "img": "lari-luckybeard",
         "madnessLevel": 0,
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
         "isActive": "active",
         "abilityText": "Add two to a die",
         "ability": "addTwo",
         "triggers": {},
         "img": "dr-john-johnson",
         "madnessLevel": 0,
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
         "isActive": "active",
         "abilityText": "Subtract one from a die",
         "ability": "subtractOne",
         "triggers": {},
         "img": "sub-ensign-hammer",
         "madnessLevel": 0,
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
         "isActive": "active",
         "abilityText": "Subtract two from a die",
         "ability": "subtractTwo",
         "triggers": {},
         "img": "eli-the-stowaway",
         "madnessLevel": 0,
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
         "isActive": "active",
         "abilityText": "Flip a die over",
         "ability": "flip",
         "triggers": {},
         "img": "moxy-goodwhistle",
         "madnessLevel": 0,
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
         "isActive": "active",
         "abilityText": "Use another crew members ability",
         "ability": "chooseAbility",
         "triggers": {},
         "img": "mojo",
         "madnessLevel": 0,
         "traits": {
            "space fetishist": true,
            "pretentious": true,
            "entitled": true
         }
      }
   }
}

export const storyElements = [
   "Frayed wire",
   "Hull breach",
   "Exploding console",
   "Trampoline",
   "Laser show",
   "Escaped experiment",
   "Space werewolves",
   "Space aliens",
   "Space ghosts",
   "Space vampires",
   "Time bomb",
   "Space leprechaun",
   "Creepy murder child",
   "Giant space ant",
   "Space cultist",
   "Space dragon",
   "Space policeman",
   "Alien sport hunter",
   "Fire",
   "Carnivorous plants",
   "Cthulhu",
   "Velociraptors",
   "Bounty hunters",
   "Metal eating robots",
   "Evil Santa",
   "Overflowing toilet",
   "Shape shifter",
   "Robots!",
   "Samurai duel",
   "30 kindergardeners",
   "Plethora of puppies",
]