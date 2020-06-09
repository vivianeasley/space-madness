import { html } from 'lighterhtml';

// These methods that return various modal content
export namespace modalContentMethods {
    // Public methods
    export function win () {
        return html`
        <h2 class="modal-h2-spacing">You won Space Madness the game!</h2>
        <p class="modal-paragraph"><img src="./images/modal-content/game-cover.jpg" alt="Space Madness title image">After your ship returns to space port, you recieve a comunicae from command. The message simply says "Do better next next time". You might expect more after so much hard work but space managment is a thankless profession. If you want the riches and glory try space trucking or possibly a side hustle as an alien host. As you look out upon the stars you can't help but worry about what could have been. Moments later your Space Nacho's arrive!</p>
        `
    };

    export function madnessLose () {
        return html`
            <h2 class="modal-h2-spacing">Sorry, you lost due to SPACE MADNESS!</h2>
            <p class="modal-paragraph"><img class="modal-crew-image modal-img-right" src="./images/modal-content/aldren-image.jpg" alt="Mrs. Roboto going mad and attacking Ambassador Aldren">After the Orpheus never arrived at space port a search was launched for the missing vessel. After 3 weeks combing it's last known position in a poorly mapped sector it was discovered adrift. The bodies of seven crew members were found. After a brief investigation it was concluded SPACE MADNESS had taken a crew member!</p>
            `
    };

    export function missionLose () {
        return html`
        <h2 class="modal-h2-spacing">Sorry, you lost due to mission failure!</h2>
        <p class="modal-paragraph"><img src="./images/modal-content/ship-explode.jpg" alt="Space ship exploding image">The ships hull moans and the power flickers repeatedly. Your team has failed. Was it Space Vampires? Maybe it was too many Christmas lights in the medical bay. Sadly, you'll never know for sure. The one thing you do know is your crew really bungled things up. Bungled them all the way to bungle town, population a whole lot of bungles. Bungle.</p>
        `
    };

    export function failedMission () {
        return html`
            <h2 class="modal-h2-spacing">You failed the mission! Tensions rise!</h2>
            <p class="modal-paragraph"><img class="modal-crew-image modal-img-right" src="./images/modal-content/hammer-image.jpg" alt="Space Madness title image">The crew you chose to complete the most recent mission bursts through the doorway. One has a small head wound and another looks to have had their eyebrows singed off. You don't even have to ask what happend. The frazzled looks tell you everything you need to know. You'll have to be careful after this. If your crew can't recover this failed mission with a success, it could spell doom for the ship and everyone aboard.</p>
        `
    };

    export function suceededMission () {
        return html`
            <h2 class="modal-h2-spacing">Success! Your crew was up to the challenge!</h2>
            <p class="modal-paragraph"><img class="modal-crew-image modal-img-right" src="./images/modal-content/moxy-image.jpg" alt="Pilot moxy saluting">The crew you chose to complete the mission walks through the doorway in a manner that can only be described as "cocky". Honestly you don't care if they take some pride in their work as long as they get the job done and don't drive each other insane while doing it. That said, you can't help but notice the tension in the air. Was that a nervous tick from one of the crew? Your brow furrows as you contemplate the terrible implications of space madness aboeard your ship.</p>
            `
    };

    export function rules (simpleRules) {
        if (simpleRules) {
            return html`
                <img src="./images/modal-content/title.jpg" alt="Space Madness title image">
                <h2 class="modal-h2-spacing">Introduction:</h2>
                <p class="modal-paragraph">You are the captain of the Orpheus a standard class exploration ship mapping unknown sectors. In a bizarre turn of events your ship has been plagued by problems that defy imagination. It's up to and your crew to go on a series of missions to clear the ship of these challenging situations.</p>
                <h2 class="modal-h2-spacing">Objective:</h2>
                <p class="modal-paragraph">Have your crew complete all the missions without driving each other insane with their annoying traits.</p>
                <h2 class="modal-h2-spacing">How to Play:</h2>
                <p class="modal-paragraph">Choose a mission card for your crew to attempt. Then choose the number of crew need to complete the mission.</p>
                <p class="modal-paragraph modal-bkgrd-lght-grey">After each mission attempt crews triggers will be revealed if they worked with another crew member who had those traits. When a crew member has all 3 of their triggers revealed they go space mad, murder everone on the ship, and you lose the game. Only one trigger can be revealed per crew member each round.</p>
                <p class="modal-paragraph">You have some information about one crew member chosen at random each game. You know who drives them crazy but you don't know which traits are triggers.</p>
                <p class="modal-paragraph modal-bkgrd-lght-grey">When all missions are completed, the ship hasn't exploded, and none of the crew are space mad, you win the game.</p>
                <h2 class="modal-h2-spacing" style="display: block;text-align: center;">Visual Glossary:</h2>
                <div class="modal-glossary-section">
                <h3>UI Bar:</h3> <p class="modal-paragraph">This is the area at the top of teh page that will instruct you on what to do each phase of the game. There will usually be a button on the right, which will be disabled until you have completed the requested task. If you are unsure what do do you should look to thos bar. The question mark icon also show you more detailed instructions and links to these rules.
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
            <img src="./images/modal-content/title.jpg" alt="Space Madness title image">
            <h2 class="modal-h2-spacing">Introduction:</h2>
            <p class="modal-paragraph">You are the captain of the Orpheus a standard class exploration ship mapping unknown sectors. In a bizarre turn of events your ship has been plagued by problems that defy imagination. It's up to and your crew to go on a series of missions to clear the ship of these challenging situations.</p>
            <h2 class="modal-h2-spacing">Objective:</h2>
            <p class="modal-paragraph">Have your crew complete all the missions without driving each other insane with their annoying traits.</p>
            <h2 class="modal-h2-spacing">How to Play:</h2>
            <p class="modal-paragraph">Choose a mission card for your crew to attempt. Then choose 3-8 crew to send on that mission.</p>
            <p class="modal-paragraph modal-bkgrd-lght-grey">Each crew has a special ability that can be applied to any crew's die to meet the missions requirements.</p>
            <p class="modal-paragraph">If you fail a mission it turns face down along with the crew that were on that mission. Crew that are face down can't use their abilities. If you succeed at a face down mission card it flips back over. If you fail a face down mission you lose the game. Face down crew on any successful mission flip face up and can use their abilities again.</p>
            <p class="modal-paragraph modal-bkgrd-lght-grey">After each mission attempt crews triggers will be revealed if they worked with another crew member who had those traits. When a crew memeber has all 3 of their triggers revealed they go space mad, murder everone on the ship, and you lose the game. Only one trigger can be revealed per crew member each round.</p>
            <p class="modal-paragraph">You have some information about one crew member chosen at random each game. You know who drives them crazy but you don't know which traits are triggers.</p>
            <p class="modal-paragraph modal-bkgrd-lght-grey">When all missions are completed, the ship hasn't exploded, and none of the crew are space mad, you win the game.</p>
            <h2 class="modal-h2-spacing" style="display: block;text-align: center;">Visual Glossary:</h2>
            <div class="modal-glossary-section">
            <h3>UI Bar:</h3> <p class="modal-paragraph">This is the area at the top of teh page that will instruct you on what to do each phase of the game. There will usually be a button on the right, which will be disabled until you have completed the requested task. If you are unsure what do do you should look to thos bar. The question mark icon also show you more detailed instructions and links to these rules.
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

}