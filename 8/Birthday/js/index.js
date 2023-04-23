const setup = () => {
// zit mijn geboortedatum in
    let geboortedatum = new Date("2003-10-04");
    let vandaag = new Date();

// Bereken het aantal milliseconden tussen mijn geboortedatum en de huidige datum
    let verschilInTijd = geboortedatum.getTime() - vandaag.getTime();

// Bereken het aantal dagen tussen mijn geboortedatum en de huidige datum
    let dagen = Math.floor(verschilInTijd / (1000 * 60 * 60 * 24));

// Geef het aantal dagen weer in de console
    console.log("Het aantal dagen tussen mijn verjaardag en de huidige datum is: " + dagen + " dagen.");
};
window.addEventListener("load", setup);