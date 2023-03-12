const setup = () => {

    const button = document.getElementById("button");
    button.addEventListener('click', press);

}

const press = () => {

    let inputveld = document.getElementById("inputveld").value;

    let return_tekst = "";

    while (inputveld.includes(" ") === true){
        inputveld = inputveld.replace(" ", "");
    }

    for (let i = 0; i < inputveld.length; i++) {
        return_tekst += inputveld.charAt(i) + " ";
    }

    console.log(return_tekst);

}
window.addEventListener("load", setup);