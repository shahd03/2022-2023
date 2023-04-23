const setup = () => {
// Definieer het complexe object student1:
    let student1 = {
        voornaam: "Shahd",
        naam: "Abuzubaida",
        geboorteDatum: new Date("2003-10-04"),
        studie: "Informatica",
        vakken: ["Programmeren", "Databases", "Netwerken"], // een array
        adres: {
            straat: "Posthoornstraat",
            huisnummer: 74,
            postcode: "9780",
            stad: "Zulte"
        },
        isIngeschreven: true,
        aantalAutos: 1
    }
    console.log(JSON.stringify(student1))

//Hier is het tweede programma:
    let student1Json = JSON.parse('{"voornaam":"Shahd","naam":"Abuzubaida","geboorteDatum":"2003-10-04T00:00:00.000Z","studie":"Informatica","vakken":["Programmeren","Databases","Netwerken"],"adres":{"straat":"Posthoornstraat","huisnummer":74,"postcode":"9780","stad":"Zulte"},"isIngeschreven":true,"aantalAutos":1}');
    console.log(student1Json);

    if (student1Json.voornaam === student1.voornaam && student1Json.naam === student1.naam && student1Json.geboorteDatum === student1.geboorteDatum.toISOString() && student1Json.studie === student1.studie && student1Json.vakken === student1.vakken && student1Json.adres.straat === student1.adres.straat && student1Json.adres.postcode === student1.adres.postcode && student1Json.adres.stad === student1.adres.stad && student1Json.isIngeschreven === student1.isIngeschreven && student1Json.aantalAutos === student1.aantalAutos) {
        console.log("Gelijk");
    } else {
        console.log("Niet gelijk");
    }
}
window.addEventListener("load", setup);