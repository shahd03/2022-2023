let personen = [];

const bewaarBewerktePersoon = () => {
    valideer();

    let invalid = document.querySelectorAll(".invalid");
    if(invalid.length === 0){
        let person = {
            firstname: document.querySelector("#txtVoornaam").value,
            lastname: document.querySelector("#txtFamilienaam").value,
            birthDate: document.querySelector("#txtGeboorteDatum").value,
            email: document.querySelector("#txtEmail").value,
            numberOfChildren: document.querySelector("#txtAantalKinderen").value
        }
        let newPersoon= true;
        let i = 0;
        while(i < personen.length && newPersoon){
            if(personen[i].email === person.email){
                newPersoon = false;
                personen[i] = person;
            }
            i++;
        }
        if(newPersoon){
            personen.push(person);
        }
    }

    let selectPerson = document.querySelector("select");
    for (let i = 0; i < personen.length; i++) {
        let option = document.createElement("option");
        option.id = i.toString();
        let text = document.createTextNode(personen[i].firstname + " " + personen[i].lastname);
        option.appendChild(text);
        selectPerson.appendChild(option);
    }

    let optionElements = document.querySelectorAll("option")
    for (let optionElement of optionElements) {
        optionElement.remove();
    }
};

const bewerkNieuwePersoon = () => {
    let inputFields = document.querySelectorAll("input");
    for(let inputFieldsElement of inputFields){
        if (inputFieldsElement.type === "text"){
            inputFieldsElement.value = "";
        }
    }
};

const update = (event) => {
    let target = event.target;
    let i = target.id;
    let persoon = personen[i];
    document.querySelector("#txtVoornaam").value = persoon.firstname;
    document.querySelector("#txtFamilienaam").value = persoon.lastname;
    document.querySelector("#txtGeboorteDatum").value = persoon.birthDate;
    document.querySelector("#txtEmail").value = persoon.email;
    document.querySelector("#txtAantalKinderen").value = persoon.numberOfChildren;
    Number(i);
}

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);
    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", update);
};
window.addEventListener("load", setup);