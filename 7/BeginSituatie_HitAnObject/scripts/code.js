let global = {
        IMAGE_COUNT: 5,  // aantal figuren
        IMAGE_SIZE: 48, // grootte van de figuur
        IMAGE_PATH_PREFIX: "images/",  // map van de figuren
        IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
        MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
        score: 0,    // aantal hits
        timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};
const setup = () => {
    let button = document.querySelector("button");
    button.addEventListener("click", start);
};

const start = () => {
    let imaClick = document.querySelector("img");
    imaClick.addEventListener("click", controle);
    moveImage();
}

const controle = () => {
    clearTimeout(global.timeoutId);
    let image = document.getElementsByClassName("image")[0];
    let score = document.querySelector("span");
    if(image.getAttribute("src") === "images/0.png"){
        alert("Game Over! \n Score: " + global.score);
        global.score = 0;
        score.textContent = "Aantal Hits : " + global.score;
    }
    else{
        global.score++;
        score.textContent = "Aantal Hits : " + global.score;
        moveImage();
    }
};

const moveImage = () => {
    let image = document.getElementsByClassName("image")[0];
    let playField = document.getElementById("playField");
    let maxHeight = playField.clientHeight - image.offsetHeight;
    let maxLeft = playField.clientWidth - image.offsetWidth;
    let left = Math.floor(Math.random() * maxLeft);
    let top = Math.floor(Math.random() * maxHeight);
    image.style.left = left + "px";
    image.style.top = top + "px";
    clearTimeout(global.timeoutId);
    global.timeoutId = setTimeout(moveImage, global.MOVE_DELAY);
    let random = Math.floor(Math.random() * 5);
    image.setAttribute("src", "images/" + random + ".png");
};

window.addEventListener("load", setup);

