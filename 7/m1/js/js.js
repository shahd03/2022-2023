let global = {
    IMAGE_PREFIX: `url(\"image/foto`,
    IMAGE_SUFFIX: `.png\")`,
    controleerFoto: true,
    tweeKaartenAlOmgedraaid: false,
    geklikteFoto: null,
    images: [],
    atlGeraden: 0,
};

const setup = () => {
    let button = document.querySelector("button");
    button.addEventListener("click", herstartSpel);
    let localeVariableImages = [];
    for (let i = 1; i < 13; i++) {
        if (i > 6){
            let ii = i - 6;
            localeVariableImages.push(global.IMAGE_PREFIX + ii + global.IMAGE_SUFFIX)
        }
        else {
            localeVariableImages.push(global.IMAGE_PREFIX + i + global.IMAGE_SUFFIX)
        }
    }
    let i = localeVariableImages.length;
    while (i > 0) {
        let index = Math.floor(Math.random() * i);
        i--;
        let variable = localeVariableImages[i];
        localeVariableImages[i] = localeVariableImages[index];
        localeVariableImages[index] = variable;
    }
    global.images = localeVariableImages;
    let fotos = document.getElementsByClassName("image");
    for (let i = 0; i < fotos.length; i++) {
        fotos[i].addEventListener("click", draaiOm)
    }
};

const draaiOm = (i) => {
    if (global.tweeKaartenAlOmgedraaid === false){
        let element = i.target;
        let index = element.getAttribute("id") -1;
        let foto = global.images[index];

        if (global.controleerFoto){
            element.removeEventListener("click", draaiOm);
            element.style.backgroundImage = foto;
            global.geklikteFoto = element;
            global.controleerFoto = false;
        }
        else if (global.controleerFoto === false){
            element.style.backgroundImage = foto;
            element.removeEventListener("click", draaiOm);
            if(global.geklikteFoto.style.backgroundImage !== foto){
                global.tweeKaartenAlOmgedraaid = true;
                setTimeout(draaiTerugOm, 800, element);
            }
            else{
                global.controleerFoto = true;
                global.atlGeraden++;

            }}}};

const draaiTerugOm = (element) => {
    element.addEventListener("click", draaiOm);
    global.geklikteFoto.addEventListener("click", draaiOm);
    element.style.backgroundImage = "";
    global.geklikteFoto.style.backgroundImage = "";
    global.controleerFoto = true;
    global.tweeKaartenAlOmgedraaid = false;
};

const herstartSpel = () => {
    window.location.reload();
};

window.addEventListener("load", setup);