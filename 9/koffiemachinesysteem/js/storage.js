const storeValues = () => {
    let type = document.querySelector('#type');
    let sugar = document.querySelector('#sugar');
    let milk = document.querySelector('#milk');
    localStorage.setItem("type", type.value);
    localStorage.setItem("sugar", sugar.value);
    localStorage.setItem("milk",milk.value);

};

const restoreValues = () => {
    let type = document.querySelector('#type');
    let sugar = document.querySelector('#sugar');
    let milk = document.querySelector('#milk');
    let newT = localStorage.getItem("type");
    let newS = localStorage.getItem("sugar");
    let newM = localStorage.getItem("milk");

    type.value = newT;
    sugar.value = newS;
    milk.value = newM;

};