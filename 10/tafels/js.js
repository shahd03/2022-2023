const setup = (   ) => {
    let button = document.querySelector("#button");
    button.addEventListener("click", generateTable);
};

const generateTable = (   ) => {
    const numberInput = document.getElementById("numberInput");
    const tablesContainer = document.getElementById("tablesContainer");

    const inputValue = parseInt(numberInput.value);
    if (isNaN(inputValue)) {
        alert("Voer een getal in");
        return;
    }

    const currentTime = new Date().toLocaleTimeString();

    const table = document.createElement("div");
    table.className = "table";

    const box = document.createElement("div");
    box.className = "box";

    const tableHeader = document.createElement("h4");
    tableHeader.textContent = `Tafel van ${inputValue} aangemaakt op: ${currentTime}`;
    box.appendChild(tableHeader);
    table.appendChild(box);

    const tableContent = document.createElement("div");
    tableContent.className = "content";
    box.appendChild(tableContent);

    for (let i = 1; i <= 10; i++) {
        const row = document.createElement("div");
        row.className = "row";
        row.textContent = `${inputValue} x ${i} = ${inputValue * i}`;
        tableContent.appendChild(row);
    }
    tablesContainer.appendChild(table);
    numberInput.value = "";
};

window.addEventListener("load", setup);