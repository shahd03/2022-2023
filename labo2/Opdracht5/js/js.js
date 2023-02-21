const setup = () => {
    let welkom=document.getElementById("welkom")
    welkom.addEventListener("click", welkom);
}
const welkom = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);