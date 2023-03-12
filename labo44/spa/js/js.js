const setup = () => {
    const submit = document.getElementById("submit");
    submit.addEventListener('click', click);
}

const click = () => {
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");
    let string = "";

    while (input.includes(" ")) {
        input = input.replace(" ", "");
    }

    for (let i = 0; i < input.length; i++) {
        string += input.charAt(i).concat(" ");
    }

    output.innerHTML = string;
}
window.addEventListener("load", setup);