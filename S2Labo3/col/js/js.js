const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let i= 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update)
        sliders[i].addEventListener("input", update)
    }
    update();
};

const update = () => {
    //red
    let red= document.getElementById("sldRed").value;
    document.getElementById("lblRed").innerHTML=red;

    //blue
    let blue= document.getElementById("sldBlue").value;
    document.getElementById("lblBlue").innerHTML=blue;

    //green
    let green= document.getElementById("sldGreen").value;
    document.getElementById("lblGreen").innerHTML=green;



//swatch
    let swatch=document.getElementById("swatch");
    swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";

};

window.addEventListener("load", setup);