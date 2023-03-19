const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", valideer);
}
const valideer = () => {
    valideerVoornaam();
    valideerFamilienaam();
    valideerGeboortedatum();
    valideerEmail();
    valideerAantalKinderen();
}
const valideerVoornaam = () => {
    let voornaam = document.getElementById("voornaam");
    let errorVoornaam = document.getElementById("errorVoornaam");
    let voornamen = voornaam.value.trim();
    if (voornamen.length > 30) {
        voornaam.className = "invalid";
        errorVoornaam.innerHTML = "max. 30 karakters";
    } else {
        voornaam.className = "";
        errorVoornaam.innerHTML = "";
    }
}
const valideerFamilienaam = () => {
    let familienaam = document.getElementById("familienaam");
    let errorFamilienaam = document.getElementById("errorFamilienaam");
    let familienamen = familienaam.value.trim();
    if (familienamen.length === 0) {
        familienaam.className = "invalid";
        errorFamilienaam.innerHTML = "verplicht veld";
    } else {
        familienaam.className = "";
        errorFamilienaam.innerHTML = "";
    }
    if (familienamen.length > 50) {
        familienaam.className = "invalid";
        errorFamilienaam.innerHTML = "max. 50 karakters";
    } else {
        familienaam.className = "";
        errorFamilienaam.innerHTML = "";
    }
}
const valideerGeboortedatum = () => {
    let geboortedatum = document.getElementById("geboortedatum");
    let errorGeboortedatum = document.getElementById("errorGeboortedatum");
    let geboortedatums = geboortedatum.value.trim();
    if (geboortedatums.length === 0) {
        geboortedatum.className = "invalid";
        errorGeboortedatum.innerHTML = "verplicht veld";
    } else {
        geboortedatum.className = "";
        errorGeboortedatum.innerHTML = "";
    }
    if (!geboortedatums.format(jjjj-mm-dd)) {
        geboortedatum.className = "invalid";
        errorGeboortedatum.innerHTML = "formaat is niet jjjj-mm-dd";
    } else {
        geboortedatum.className = "";
        errorGeboortedatum.innerHTML = "";
    }
    if (geboortedatums === "") {
        geboortedatum.className = "invalid";
        errorGeboortedatum.innerHTML = "verplicht veld";
    } else {
        geboortedatum.className = "";
        errorGeboortedatum.innerHTML = "";
    }
}
const valideerEmail = () => {
    let email = document.getElementById("email");
    let errorEmail = document.getElementById("errorEmail");
    let emails = email.value.trim();
    if (emails.length === 0) {
        email.className = "invalid";
        errorEmail.innerHTML = "verplicht veld";
    } else {
        email.className = "";
        errorEmail.innerHTML = "";
    }
    if (!emails.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
       email.className = "invalid";
        errorEmail.innerHTML = "geen geldig email adres";
    } else {
        email.className = "";
        errorEmail.innerHTML = "";
    }
}
const valideerAantalKinderen = () => {
    let aantalKinderen = document.getElementById("aantalKinderen");
    let errorAantalKinderen = document.getElementById("errorAantalKinderen");
    let atlKinderen = aantalKinderen.value.trim();
    if (atlKinderen < 0) {
        aantalKinderen.className = "invalid";
        errorAantalKinderen.innerHTML = "is geen positief getal";
    } else {
        aantalKinderen.className = "";
        errorAantalKinderen.innerHTML = "";
    }
    if (atlKinderen > 99) {
        aantalKinderen.className = "invalid";
        errorAantalKinderen.innerHTML = "is te vruchtbaar";
    } else {
        aantalKinderen.className = "";
        errorAantalKinderen.innerHTML = "";
    }
}
window.addEventListener("load", setup);