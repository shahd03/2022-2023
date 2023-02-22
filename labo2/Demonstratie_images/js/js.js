const setup = () => {
    let btnVoegToe = document.getElementById("btnVoegToe");
    btnVoegToe.addEventListener("click", voegToe);
}

const voegToe = () => {
    let txtInput = document.getElementById("txtInput");
    let url = txtInput.value;
    let divImages = document.getElementById("divImages");
    divImages.innerHTML += "<img src='"+url+"'>";
    txtInput.value="";
}


window.addEventListener('load',setup);