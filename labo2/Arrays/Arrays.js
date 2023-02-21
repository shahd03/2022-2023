let familieLeden = ["Moeder", "Vader", "Zus", "Broer", "Tante"];
const setup = () => {
console.log(familieLeden.length); //5 elementen
console.log(familieLeden[0], familieLeden[2], familieLeden[4]); //Moeder, Zus, Tante

    addName();
    console.log(familieLeden.join())
}

let extraNaam = prompt("Voeg een familielid toe: ");
familieLeden.push(extraNaam)
console.log(familieLeden); //Moeder, Vader, Zus, Broer, Tante, extraNaam

let familieString = familieLeden.toString();
console.log(familieString); //Moeder, Vader, Zus, Broer, Tante, extraNaam

window.addEventListener("load", setup);