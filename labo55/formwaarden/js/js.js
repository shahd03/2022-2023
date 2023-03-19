const setup = () => {

    const resultaat = document.getElementById("resultaat");
    resultaat.addEventListener('click', click);
}

const click = () => {
    const roker = document.getElementById("isRoker");
    if (roker.checked) {
        console.log("Is een roker.");
    } else {
        console.log("Is geen roker.");
    }

    const nl = document.getElementById("nl");
    const fr = document.getElementById("fr");
    const en = document.getElementById("en");
    const a = document.getElementById("a");
    if (nl.checked) {
        console.log("Moedertaal is Nederlands.");
    } else if (fr.checked) {
        console.log("Moedertaal is Frans.")
    } else if (en.checked) {
        console.log("Moedertaal is Engels.")
    } else if (a.checked) {
    console.log("Moedertaal is Arabisch.")
    }else {
        console.log("Moedertaal is niet weergegeven.")
    }

    let buurland = document.getElementById("buurland").value;
    console.log("Favoriete buurland is: " + buurland);

    let bestellingOptions = document.getElementById("bestelling").options;
    let bestelling = [];
    for (let i = 0; i < bestellingOptions.length; i++) {
        let option = bestellingOptions[i];
        if(option.selected){
            bestelling.push(option);
        }
    }

    let printBestelling = "Bestelling bestaat uit: ";
    for (let i = 0; i < bestelling.length; i++) {
        printBestelling += bestelling[i].value + " ";
    }
    console.log(printBestelling.trim());
}

window.addEventListener("load", setup);