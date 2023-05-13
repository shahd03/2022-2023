const setup = () => {
    let btn = document.querySelector("#button");
    btn.addEventListener("click", search);
    restoreLocalStorage();
};

const search = () => {
    const input = document.getElementById("search").value;
    const commando = input.substring(1, 2);
    let query = input.substring(3).trim();
    let invalidCommando = false;
    if(input.substring(0, 1) === "/"){
        switch (commando) {
            case "i":
                window.open(`https://www.instagram.com/explore/tags/${query}`);
                break;
            case "g":
                window.open(`https://www.google.com/search?q=${query}`);
                break;
            case "y":
                window.open(`https://www.youtube.com/results?search_query=${query}`);
                break;
            case "t":
                window.open(`https://twitter.com/hashtag/${query}`);
                break;
            default:
                alert("Unknown command prefix.");
                invalidCommando = true;
                break;
        }
    }
    else{
        alert("Invalid Command.");
        invalidCommando = true;
    }

    let search = document.createElement("h6");
    search.append(input.substring(2));
    search.classList.add("search");
    const history = document.getElementById("history");
    let button = document.createElement("button");
    button.innerText = "GO!";
    button.addEventListener("click", search2);
    if(!invalidCommando){
        const divW = document.createElement("div");
        divW.classList.add("col-4");
        divW.classList.add("divW");
        const div = document.createElement("div");
        let titl = document.createElement("h5");
        switch (commando) {
            case "t":
                titl.innerText = "Twitter";
                div.classList.add("Twitter");
                div.classList.add("card");
                div.append(titl);
                button.classList.add("blackBtn");
                break;
            case "y":
                titl.innerText = "Youtube";
                div.classList.add("Youtube");
                div.classList.add("card");
                div.append(titl);
                button.classList.add("grayBtn");
                break;
            case "i":
                titl.innerText = "Instagram";
                div.classList.add("Instagram");
                div.classList.add("card");
                div.append(titl);
                button.classList.add("yellowBtn");
                break;
            case "g":
                titl.innerText = "Google";
                div.classList.add("Google");
                div.classList.add("card");
                div.append(titl);
                button.classList.add("orangeBtn");
                break;
        }
        history.appendChild(divW);
        div.append(search);
        div.append(button);
        divW.append(div);
        saveLocalStorage();
    }
};

const search2 = () => {
    const input = document.getElementById("search").value;
    const commando = input.substring(1, 2);
    const query = input.substring(3).trim();
    switch (commando) {
        case "t":
            window.open(`https://twitter.com/hashtag/${query}`);
            break;
        case "g":
            window.open(`https://www.google.com/search?q=${query}`);
            break;
        case "y":
            window.open(`https://www.youtube.com/results?search_query=${query}`);
            break;
        case "i":
            window.open(`https://www.instagram.com/explore/tags/${query}`);
            break;
    }
};

const saveLocalStorage = () => {
    let arr = [];
    let divs = document.querySelectorAll(".divW");
    for (let i = 0; i < divs.length; i++) {
        let divW = divs[i].innerHTML;
        arr.push(divW);
    }
    let save = JSON.stringify(arr);
    localStorage.setItem("save", save);
};

const restoreLocalStorage = () => {
    const history = document.getElementById("history");
    let SArray = localStorage.getItem("save");
    let array = JSON.parse(SArray);
    for (let i = 0; i < array.length; i++) {
        let divW = document.createElement("div");
        divW.classList.add("col-4");
        divW.classList.add("divW");
        divW.innerHTML = array[i];
        history.appendChild(divW);
    }
};
window.addEventListener("load", setup);
