const setup = () => {
    let btnChange=document.getElementById("btnChange");
    btnChange.addEventListener("click", change);
}

const change = () => {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!";
}
window.addEventListener("load", setup);