const setup = () => {

    let global = {
        IMAGE_COUNT: 5,  // aantal figuren
        IMAGE_SIZE: 48, // grootte van de figuur
        IMAGE_PATH_PREFIX: "images/",  // map van de figuren
        IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
        MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
        score: 0,    // aantal hits
        timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
    };

    let playField = document.getElementById('playField');
    let startBtn = document.getElementById('startButton');
    let afbeelding = document.createElement("img");

// plaats het afbeelding in het speelveld
    playField.appendChild(afbeelding);

// zet de positie van het afbeelding willekeurig
    let x = Math.floor(Math.random() * (playField.offsetWidth - global.IMAGE_SIZE));
    let y = Math.floor(Math.random() * (playField.offsetHeight - global.IMAGE_SIZE));
    afbeelding.style.left = x + "px";
    afbeelding.style.top = y + "px";

// voeg een click event toe aan het afbeelding
    afbeelding.addEventListener("click", function() {
        global.score++;

        console.log("Score: " + global.score);
        x = Math.floor(Math.random() * (playField.offsetWidth - global.IMAGE_SIZE));
        y = Math.floor(Math.random() * (playField.offsetHeight - global.IMAGE_SIZE));
        afbeelding.style.left = x + "px";
        afbeelding.style.top = y + "px";
    });

// voeg een click event toe aan de start knop
    startBtn.addEventListener("click", function() {
        if (global.timeoutId === 0) {
            global.timeoutId = setInterval(function() {
                console.log("Tick");
            }, global.MOVE_DELAY);
        }
    });
}

window.addEventListener("load", setup);


