const setup = (   ) => {
    let button = document.querySelector("#button");
    button.addEventListener("click", search);
    restoreLocalStorage();
};

const search = (   ) => {
    const searchInput = document.getElementById("search").value;
    const commando = searchInput.substring(1, 2);
    let query = searchInput.substring(3).trim();

    let invalid_commando = false;

    if(searchInput.substring(0, 1) === "/"){
        switch (commando) {
            case "y":
                window.open(`https://www.youtube.com/results?search_query=${query}`);
                break;
            case "g":
                window.open(`https://www.google.com/search?q=${query}`);
                break;
            case "t":
                window.open(`https://twitter.com/hashtag/${query}`);
                break;
            case "i":
                window.open(`https://www.instagram.com/explore/tags/${query}`);
                break;
            default:
                alert("Unknown command prefix");
                invalid_commando = true;
                break;
        }
    }
    else{
        alert("invalid command");
        invalid_commando = true;
    }


    const history = document.getElementById("history");

    let search = document.createElement("h6");
    search.append(searchInput.substring(2));
    search.classList.add("search");

    let button = document.createElement("button");
    button.innerText = "GO!";
    button.addEventListener("click", search_again);

    if(!invalid_commando){
        const wrapperdiv = document.createElement("div");
        wrapperdiv.classList.add("col-4");
        wrapperdiv.classList.add("wrapperdiv");

        const div = document.createElement("div");

        let title = document.createElement("h5");

        switch (commando) {
            case "y":
                title.innerText = "Youtube";
                div.classList.add("Youtube");
                div.classList.add("card");
                div.append(title);
                button.classList.add("dark_gray_button");
                break;
            case "g":
                title.innerText = "Google";
                div.classList.add("Google");
                div.classList.add("card");
                div.append(title);
                button.classList.add("orange_button");
                break;
            case "t":
                title.innerText = "Twitter";
                div.classList.add("Twitter");
                div.classList.add("card");
                div.append(title);
                button.classList.add("black_button");
                break;
            case "i":
                title.innerText = "Instagram";
                div.classList.add("Instagram");
                div.classList.add("card");
                div.append(title);
                button.classList.add("yellow_button");
                break;
        }
        div.append(search);
        div.append(button);
        wrapperdiv.append(div);
        history.appendChild(wrapperdiv);
        saveToLocalStorage();
    }
};

const search_again = (   ) => {
    const searchInput = document.getElementById("search").value;
    const commando = searchInput.substring(1, 2);

    const query = searchInput.substring(3).trim();

    switch (commando) {
        case "y":
            window.open(`https://www.youtube.com/results?search_query=${query}`);
            break;
        case "g":
            window.open(`https://www.google.com/search?q=${query}`);
            break;
        case "t":
            window.open(`https://twitter.com/hashtag/${query}`);
            break;
        case "i":
            window.open(`https://www.instagram.com/explore/tags/${query}`);
            break;
    }
};

//werkt niet
const saveToLocalStorage = (   ) => {
    localStorage.clear();
    let array = [];
    let divs = document.querySelectorAll(".wrapperdiv").values();
    for (let i = 0; i < divs.length; i++) {
        let wrapperdiv = divs[i];
        array.push(wrapperdiv);
    }
    let save = JSON.stringify(array);
    localStorage.setItem("save", save);
};

//werkt niet
const restoreLocalStorage = (   ) => {
    const history = document.getElementById("history");

    let stringArray = localStorage.getItem("save");
    let array = JSON.parse(stringArray);

    for (let i = 0; i < array.length; i++) {
        history.appendChild(array[i].value);
    }
};

window.addEventListener("load", setup);
