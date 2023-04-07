let global = {
    IMAGE_PREFIX: `url(\"image/foto`,
    IMAGE_SUFFIX: `.png\")`,
    controleerFoto: true,
    kaartenOmgedraaid: false,
    geklikteFoto: null,
    images: [],
    atlGeraden: 0,
};

const setup = () => {
    let button = document.querySelector("button");
    button.addEventListener("click", herstart);
    let toSave = [];
    for (let i = 1; i < 13; i++) {
        if (i > 6){
            let ii = i - 6;
            toSave.push(global.IMAGE_PREFIX + ii + global.IMAGE_SUFFIX)
        }
        else {
            toSave.push(global.IMAGE_PREFIX + i + global.IMAGE_SUFFIX)
        }
    }
    let i = toSave.length;
    while (i > 0) {
        let index = Math.floor(Math.random() * i);
        i--;
        let variable = toSave[i];
        toSave[i] = toSave[index];
        toSave[index] = variable;
    }
    global.images = toSave;
    let fotos = document.getElementsByClassName("image");
    for (let i = 0; i < fotos.length; i++) {
        fotos[i].addEventListener("click", draai)
    }
};
const draaiTerug = (element) => {
    const correct = new Audio("audio/correct.mp3");
    const notCorrect = new Audio("audio/false.mp3");
    element.addEventListener("click", draai);
    global.geklikteFoto.addEventListener("click", draai);
    element.style.backgroundImage = "";
    global.geklikteFoto.style.backgroundImage = "";
    global.controleerFoto = true;
    global.kaartenOmgedraaid = false;
    correct.play();

};

const draai = (i) => {
    const correct = new Audio("audio/correct.mp3");
    const notCorrect = new Audio("audio/false.mp3");
    if (global.kaartenOmgedraaid === false){
        let elmt = i.target;
        let index = elmt.getAttribute("id") -1;
        let foto = global.images[index];

        if (global.controleerFoto){
            elmt.removeEventListener("click", draai);
            elmt.style.backgroundImage = foto;
            global.geklikteFoto = elmt;
            global.controleerFoto = false;
            notCorrect.play();
        }
        else if (global.controleerFoto === false){
            elmt.style.backgroundImage = foto;
            elmt.removeEventListener("click", draai);
            if(global.geklikteFoto.style.backgroundImage !== foto){
                global.kaartenOmgedraaid = true;
                setTimeout(draaiTerug, 800, elmt);
                notCorrect.play();
            }
            else{
                global.controleerFoto = true;
                global.atlGeraden++;
                notCorrect.play();

            }}}};

const herstart = () => {
    window.location.reload();
};

window.addEventListener("load", setup);