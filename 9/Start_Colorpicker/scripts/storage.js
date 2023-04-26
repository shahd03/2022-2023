const storeSliderValues = () => {
    let red = document.querySelector('#sldRed');
    let green = document.querySelector('#sldGreen');
    let blue = document.querySelector('#sldBlue');
    localStorage.setItem("red", red.value);
    localStorage.setItem("green", green.value);
    localStorage.setItem("blue",blue.value);

};

const restoreSliderValues = () => {
    let red = document.querySelector('#sldRed');
    let green = document.querySelector('#sldGreen');
    let blue = document.querySelector('#sldBlue');
    let newR = localStorage.getItem("red");
    let newG = localStorage.getItem("green");
    let newB = localStorage.getItem("blue");

    red.value = newR;
    green.value = newG;
    blue.value = newB;

};

const storeSwatches = () => {
    let swatches = [];
    let lijst = document.querySelectorAll('.swatch');

    lijst.forEach((swatch) => {
        let red = swatch.getAttribute("data-red");
        let green = swatch.getAttribute("data-green");
        let blue = swatch.getAttribute("data-blue");
        swatches.push({red:red , green:green , blue:blue});
    })

    localStorage.setItem("swatches",JSON.stringify(swatches));
};

const restoreSwatches = () => {
    let storedSwatches = localStorage.getItem("swatches");
    let swatchItem = document.querySelector('#swatchComponents');

    if(storedSwatches === null){
        console.log("nothing is saved");
    } else {
        let storedSwatchesInText = JSON.parse(storedSwatches);
        for(let i = 1; i < storedSwatchesInText.length ; i++){
            let swatch = storedSwatchesInText[i];
            let red = swatch.red;
            let green = swatch.green;
            let blue = swatch.blue;
            let newS = buildSwatchComponent(red,green,blue);
            swatchItem.appendChild(newS);
        }
    }
};
