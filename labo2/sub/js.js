const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let txtInput = document.getElementById("txtInput");
    let value1 = document.getElementById("value1");
    let value2 = document.getElementById("value2");
    let txtOutput = document.getElementById("txtOutput");

    let text = txtInput.value;
    let index1 = value1.value;
    let index2 = value2.value;

    txtOutput.innerHTML = text.substring(index1, index2);
}
window.addEventListener('load',setup);