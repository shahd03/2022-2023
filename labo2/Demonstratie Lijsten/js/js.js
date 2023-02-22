const setup = () => {
    // registeer click event listener bij button
    let btnVoegToe = document.getElementById("btnVoegToe");
    btnVoegToe.addEventListener("click", voegToe);
}

const voegToe = () => {
    // Lees de tekst uit het textveld en voeg nieuw <li> element toe
    let txtInput = document.getElementById("txtInput");
    let lstEntries = document.getElementById("lstEntries");
    let tekst = txtInput.value;
    lstEntries.innerHTML += "<li>"+tekst+"</li>";
}

window.addEventListener('load',setup);