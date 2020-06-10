import { html } from 'lighterhtml';
import { music } from './sounds'
import { updateState } from './state-manager'

// These methods that return various modal content
export namespace modalContentMethods {
    // Public methods
    export function win () {
        return html`
        <h2 class="modal-h2-spacing">You won Space Madness the game!</h2>
        <p class="modal-paragraph"><img src="./images/modal-content/game-cover.jpg" alt="Space Madness title image">After your ship returns to space port, you receive a communique from command. The message simply says "Do better next next time". You might expect more after so much hard work but space management is a thankless profession. If you want riches and glory try space trucking or possibly a side hustle as an alien host. As you look out upon the stars you can't help but worry about what could have been. Moments later your Space Nacho's arrive!</p>
        `
    };

    export function madnessLose () {
        return html`
            <h2 class="modal-h2-spacing">Sorry, you lost due to SPACE MADNESS!</h2>
            <p class="modal-paragraph"><img class="modal-crew-image modal-img-right" src="./images/modal-content/aldren-image.jpg" alt="Mrs. Roboto going mad and attacking Ambassador Aldren">After your ship (The Orpheus) didn’t arrive at space port, a search was launched for the missing vessel. After three weeks combing its last known position in a poorly mapped sector, it was discovered adrift. The bodies of seven crew members were found. After a brief investigation it was concluded SPACE MADNESS had taken a crew member!</p>
            `
    };

    export function missionLose () {
        return html`
        <h2 class="modal-h2-spacing">Sorry, you lost due to mission failure!</h2>
        <p class="modal-paragraph"><img src="./images/modal-content/ship-explode.jpg" alt="Space ship exploding image">The ship’s hull moans and the power flickers repeatedly. Your team has failed. Was it Space Vampires? Maybe there were too many Christmas lights in the medical bay? Sadly, you'll never know for sure. The one thing you do know is your crew really bungled things up. Bungled them all the way to bungle town, population a whole lot of bungles. Bungle. The ship explodes.</p>
        `
    };

    export function failedMission () {
        return html`
            <h2 class="modal-h2-spacing">You failed the mission! Tensions rise!</h2>
            <p class="modal-paragraph"><img class="modal-crew-image modal-img-right" src="./images/modal-content/hammer-image.jpg" alt="Space Madness title image">The crew you chose to complete this mission bursts through the doorway. One has a small head wound and another looks to have had their eyebrows singed off. You don't even have to ask what happened. The frazzled looks tell you everything you need to know. You'll have to be careful after this. If your crew can't recover this failed mission with a success, it could spell doom for the ship and everyone aboard.</p>
        `
    };

    export function suceededMission () {
        return html`
            <h2 class="modal-h2-spacing">Success! Your crew was up to the challenge!</h2>
            <p class="modal-paragraph"><img class="modal-crew-image modal-img-right" src="./images/modal-content/moxy-image.jpg" alt="Pilot moxy saluting">The crew you chose to complete this mission walks through the doorway in a manner that can only be described as "cocky.” Honestly you don't care if they take some pride in their work as long as they get the job done and don't drive each other insane while doing it. That said, you can't help but notice the tension in the air. Was that a nervous tick from one of the crew? Your brow furrows as you contemplate the terrible implications of space madness aboard your ship.</p>
            `
    };

    export function chooseGameType (isSimpleGame:boolean, isMusicPlaying:boolean) {
        function setComplex () {
            updateState((data:any)=>{
                data.gameUiData.modalOpen = true;
                data.gameUiData.modalId = "rules";
                data.gameUiData.modalButtonText = "Start Game";

            })
        }

        function setSimple () {
            updateState((data:any)=>{
                data.gameUiData.isSimpleGame = true;
                data.gameUiData.modalOpen = true;
                data.gameUiData.modalId = "rules";
                data.gameUiData.modalButtonText = "Start Game";

            })
        }

        return html`
            <h2 class="modal-h2-spacing">Choose Game Type:</h2>
            <div>Click to toggle music <div class="modal-audio-in-text">${music(isMusicPlaying)}</div> (You may turn this off at any time in the rules modal)</div>
            <div class="seperator"></div>
            <h3>Simplified</h3>
            <p class="modal-paragraph">A simple version of the game. Good for beginners.</p>
            <button onclick=${setSimple}>Simple Version</button>
            <div class="seperator"></div>
            <h3>Complex</h3>
            <p class="modal-paragraph">Jump right in to the more complex version of Space Madness</p>
            <button onClick=${setComplex}>Complex Version</button>
            `
    };

    export function rules (isSimpleGame:boolean, isMusicPlaying:boolean) {
        if (isSimpleGame) {
            return html`
                ${music(isMusicPlaying)}
                <img src="./images/modal-content/title.jpg" alt="Space Madness title image">
                <h2 class="modal-h2-spacing">Introduction:</h2>
                <p class="modal-paragraph">You are the captain of the Orpheus, a standard class exploration ship mapping unknown sectors. In a bizarre turn of events your ship has been plagued by problems that defy imagination. It's up to you and your (mostly) faithful crew to go on a series of missions to clear the ship of these challenging situations.</p>
                <h2 class="modal-h2-spacing">Objective:</h2>
                <p class="modal-paragraph">Have your crew complete all the missions without the ship exploding or the crew driving each other space mad.</p>
                <h2 class="modal-h2-spacing">How to Play:</h2>
                <p class="modal-paragraph">Choose a mission card for your crew to attempt. Then choose the required number of crew members to send on that mission. The required number of crew changes as the missions get harder.</p>
                <p class="modal-paragraph modal-bkgrd-lght-grey">The more crew members that are sent on missions together, the more they’ll begin to annoy each other...which can lead one of them to go space mad. After each mission the crew members you sent will reveal what annoyed them about the crewmates they just worked with. Only one annoying trait can be revealed per crew member each round. When a crew member has been annoyed three times by their crewmates, they go space mad, murder everyone on the ship, and you lose the game, so plan the combination of crew to send on missions carefully.</p>
                <p class="modal-paragraph">Some key information is revealed for one crew member, chosen at random, at the start of each game.</p>
                <h2 class="modal-h2-spacing" style="display: block;text-align: center;">Visual Glossary:</h2>
                <div class="modal-glossary-section">
                <h3>Header Bar:</h3> <p class="modal-paragraph">This is the area at the top of teh page that will instruct you on what to do each phase of the game. There will usually be a button on the right, which will be disabled until you have completed the requested task. If you are unsure what do do you should look to thos bar. The question mark icon also show you more detailed instructions and links to these rules.
                <img style="width:500px" src="./images/modal-content/glossary/ui-bar.jpg" alt="Space Madness title image"></p>
                </div>
                <div class="seperator"></div>
                <div class="modal-glossary-section">
                <img class="modal-img-right" style="width:300px;" src="./images/modal-content/glossary/mission-cards-simple.jpg" alt="Space Madness title image">
                <h3>Mission card:</h3><p class="modal-paragraph"> These cards have a requirment that must be met. When you have successfully met the requirments of all 9 mission cards you win the game.</p>
                </div>
                <div class="seperator"></div>
                <div class="modal-glossary-section">
                <img class="modal-img-left" style="width:300px;" src="./images/modal-content/glossary/crew-card-simple.jpg" alt="Space Madness title image">
                <h3>Crew cards:</h3><p class="modal-paragraph"> These cards represent the crew you will send to complete missions. They include their annoying traits and a special ability you can apply to a die after it has been rolled. Crew that have failed a mission will not have an ability until they have succeeded at another mission.</p>
                </div>
                <div class="seperator"></div>
                <div class="modal-glossary-section">
                <img class="modal-img-right" style="width:353px;" src="./images/modal-content/glossary/triggers.jpg" alt="Space Madness title image">
                <h3>Crew triggers:</h3><p class="modal-paragraph"> Each game the crew are randomnly given three triggers that are traits other crew members have. If you send crew on a mission and one of their triggers overlaps with anothers crew trait, it will drive that crew space mad. For example the image below shows the triggers of a crew member that worked with Mrs. Robot. Mrs. Roboto is extremely negative and that was a trigger of this crew member. For this reason the negative trigger was revealed. When all three of this crew triggers are revealed they will go space mad, murder the crew, and you will lose the game. Only one trigger is revealed per crew member each round.</p>
                </div>
                <div class="seperator"></div>
                <div class="modal-glossary-section">
                <img class="modal-img-right" style="width:357px;" src="./images/modal-content/glossary/players-crew-triggers.jpg" alt="Space Madness title image">
                <h3>Known crew triggers:</h3><p class="modal-paragraph"> Each game you will randomly get some information about one crew members triggers. In game this is represented as a crew member you have gotten to know well and are intimetly aware of their triggers.</p>
                </div>
                <div class="seperator"></div>
                <div class="modal-glossary-section">
                <img class="modal-img-left" style="width:144px;" src="./images/modal-content/glossary/traits.jpg" alt="Space Madness title image">
                <h3>Crew traits:</h3><p class="modal-paragraph"> These are annoying/frustrating traits that crew members exibit. They will drive other crew space mad who have them as triggers.</p>
                </div>
            `;
        }
        return html`
            ${music(isMusicPlaying)}
            <img src="./images/modal-content/title.jpg" alt="Space Madness title image">
            <h2 class="modal-h2-spacing">Introduction:</h2>
            <p class="modal-paragraph">You are the captain of the Orpheus, a standard class exploration ship mapping unknown sectors. In a bizarre turn of events your ship has been plagued by problems that defy imagination. It's up to you and your (mostly) faithful crew to go on a series of missions to clear the ship of these challenging situations.</p>
            <h2 class="modal-h2-spacing">Objective:</h2>
            <p class="modal-paragraph">Have your crew complete all the missions without the ship exploding or the crew driving each other space mad.</p>
            <h2 class="modal-h2-spacing">How to Play:</h2>
            <p class="modal-paragraph">Choose a mission card for your crew to attempt. Then choose 3-8 crew members to send on that mission. Each crew member brings a die to roll and a special ability that can help them succeed with the mission.</p>
            <p class="modal-paragraph modal-bkgrd-lght-grey">But the more crew members that are sent on missions together, the more they’ll begin to annoy each other...which can lead one of them to go space mad. After each mission the crew members you sent will reveal what annoyed them about the crewmates they just worked with. Only one annoying trait can be revealed per crew member each round. When a crew member has been annoyed three times by their crewmates, they go space mad, murder everyone on the ship, and you lose the game, so plan the combination of crew to send on missions carefully.</p>
            <p class="modal-paragraph">Some key information is revealed for one crew member, chosen at random, at the start of each game.</p>
            <p class="modal-paragraph modal-bkgrd-lght-grey">If the crew you sent fails a mission, the mission card turns face down and any crew on that mission lose their special abilities. You can try the mission a second time, and if you succeed the mission card flips back over and the crew’s special abilities are returned. But if you fail a second time, the ship explodes and you lose the game.</p>
            <h2 class="modal-h2-spacing" style="display: block;text-align: center;">Visual Glossary:</h2>
            <div class="modal-glossary-section">
            <h3>Header Bar:</h3> <p class="modal-paragraph">This is the area at the top of teh page that will instruct you on what to do each phase of the game. There will usually be a button on the right, which will be disabled until you have completed the requested task. If you are unsure what do do you should look to header bar at the top of the page. The question mark icon also show you more detailed instructions and links to these rules.
            <img style="width:500px" src="./images/modal-content/glossary/ui-bar.jpg" alt="Space Madness title image"></p>
            </div>
            <div class="seperator"></div>
            <div class="modal-glossary-section">
            <img class="modal-img-right" style="width:300px;" src="./images/modal-content/glossary/mission-cards.jpg" alt="Space Madness title image">
            <h3>Mission card:</h3><p class="modal-paragraph"> These cards have a requirment that must be met. When you have successfully met the requirments of all 9 mission cards you win the game.</p>
            </div>
            <div class="seperator"></div>
            <div class="modal-glossary-section">
            <img class="modal-img-left" style="width:300px;" src="./images/modal-content/glossary/crew-card.jpg" alt="Space Madness title image">
            <h3>Crew cards:</h3><p class="modal-paragraph"> These cards represent the crew you will send to complete missions. They include their annoying traits and a special ability you can apply to a die after it has been rolled. Crew that have failed a mission will not have an ability until they have succeeded at another mission.</p>
            </div>
            <div class="seperator"></div>
            <div class="modal-glossary-section">
            <img class="modal-img-right" style="width:353px;" src="./images/modal-content/glossary/triggers.jpg" alt="Space Madness title image">
            <h3>Crew triggers:</h3><p class="modal-paragraph"> Each game the crew are randomnly given three triggers that are traits other crew members have. If you send crew on a mission and one of their triggers overlaps with anothers crew trait, it will drive that crew space mad. For example the image below shows the triggers of a crew member that worked with Mrs. Robot. Mrs. Roboto is extremely negative and that was a trigger of this crew member. For this reason the negative trigger was revealed. When all three of this crew triggers are revealed they will go space mad, murder the crew, and you will lose the game. Only one trigger is revealed per crew member each round.</p>
            </div>
            <div class="seperator"></div>
            <div class="modal-glossary-section">
            <img class="modal-img-left" style="width:142px;" src="./images/modal-content/glossary/crew-ability.jpg" alt="Space Madness title image">
            <h3>Crew ability:</h3><p class="modal-paragraph"> Each crew member has an ability that they can apply to a die roll. Crew that have failed a mission will not have an ability until they have succeeded at another mission.</p>
            </div>
            <div class="seperator"></div>
            <div class="modal-glossary-section">
            <img class="modal-img-right" style="width:357px;" src="./images/modal-content/glossary/players-crew-triggers.jpg" alt="Space Madness title image">
            <h3>Known crew triggers:</h3><p class="modal-paragraph"> Each game you will randomly get some information about one crew members triggers. In game this is represented as a crew member you have gotten to know well and are intimetly aware of their triggers.</p>
            </div>
            <div class="seperator"></div>
            <div class="modal-glossary-section">
            <img class="modal-img-left" style="width:144px;" src="./images/modal-content/glossary/traits.jpg" alt="Space Madness title image">
            <h3>Crew traits:</h3><p class="modal-paragraph"> These are annoying/frustrating traits that crew members exibit. They will drive other crew space mad who have them as triggers.</p>
            </div>

        `
    };

    export function minimumMission () {
        return html`
        <h2 class="modal-h2-spacing">You must choose a least 1 mission card</h2>
        `
    };

    export function minimumCrew () {
        return html`
        <h2 class="modal-h2-spacing">Not enough crew to complete mission. Choose more crew</h2>
        `
    };

    export function chooseAnotherCrew () {
        return html`
        <h2 class="modal-h2-spacing">You must choose another crew member for Mojo's ability</h2>
        `
    };

    export function chooseADie () {
        return html`
        <h2 class="modal-h2-spacing">You must select a die to continue or click the "Skip" button</h2>
        `
    };

    export function mojoRecursion () {
        return html`
        <h2 class="modal-h2-spacing">Mojo copies mojo's ability, copies mojo's ability, copies mojo's ability, copies mojo's ability, copies mojo's ability, copies mojo's ability, copies mojo's ability... monkey explodes. You monster.</h2>
        `
    };

}