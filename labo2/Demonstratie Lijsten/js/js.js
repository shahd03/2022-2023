const setup = () => {
    let btnVoegToe = document.getElementById("btnVoegToe");
    btnVoegToe.addEventListener("click", voegToe);
}

const voegToe = () => {
    let txtInput = document.getElementById("txtInput");
    let lstEntries = document.getElementById("lstEntries");
    let tekst = txtInput.value;
    lstEntries.innerHTML += "<li>"+tekst+"</li>";
}

window.addEventListener('load',setup);