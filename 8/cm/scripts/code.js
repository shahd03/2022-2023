let persons = [];

const changeReworkedPerson = () => {
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
        let newPerson = true;
        let i = 0;
        while(i < persons.length && newPerson){
            if(persons[i].email === person.email){
                newPerson = false;
                persons[i] = person;
            }
            i++;
        }
        if(newPerson){
            persons.push(person);
        }
    }

    let optionElements = document.querySelectorAll("option")
    for (let optionElement of optionElements) {
        optionElement.remove();
    }

    let selectPerson = document.querySelector("select");
    for (let i = 0; i < persons.length; i++) {
        let option = document.createElement("option");
        option.id = i.toString();
        let text = document.createTextNode(persons[i].firstname + " " + persons[i].lastname);
        option.appendChild(text);
        selectPerson.appendChild(option);
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

const changePerson = (event) => {
    let target = event.target;
    let i = target.id;
    Number(i);
    let person = persons[i];
    document.querySelector("#txtVoornaam").value = person.firstname;
    document.querySelector("#txtFamilienaam").value = person.lastname;
    document.querySelector("#txtGeboorteDatum").value = person.birthDate;
    document.querySelector("#txtEmail").value = person.email;
    document.querySelector("#txtAantalKinderen").value = person.numberOfChildren;
}
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", changeReworkedPerson);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("click", changePerson);
};

window.addEventListener("load", setup);