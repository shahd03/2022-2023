const setup = () => {

    let input ;
    let gemeente = [];
    input = prompt("Geef een gemeente in :");

    while(input.toLowerCase().trim() !== 'stop'){
        gemeente.push(input);
        input = prompt("Geef een gemeente in :");
    }
    gemeente.sort();

    if(input === 'stop'){
        for(let i = 0; i < gemeente.length; i++){
            var option = document.createElement("option");
            option.text = gemeente[i];
            option.value = gemeente[i];
            document.getElementById('gemeenten').add(option);
        }
    }
}

window.addEventListener("load", setup);