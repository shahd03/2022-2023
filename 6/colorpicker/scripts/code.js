const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		// we moeten zowel op het input als het change event reageren,
		// zie http://stackoverflow.com/questions/18544890
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	update();
	const save = document.querySelector("#save");
	save.addEventListener('click', saveColor);
};

const update = () => {
	let red=document.getElementById("sldRed").value; //input always value
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("lblGreen").innerHTML=green;// html-element innerHTML
	document.getElementById("lblBlue").innerHTML=blue;
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};
const saveColor = () => {
	const swatch = document.querySelector("#swatch");
	const copy = swatch.cloneNode(true);
	const saveColors = document.querySelector("#saveColors");
	saveColors.appendChild(copy);
	copy.classList.add("saveColor");
	const txtButton = document.createTextNode("X");
	const btnDelete = document.createElement("button");
	btnDelete.classList.add("delete");
	btnDelete.setAttribute('type','button');
	btnDelete.append(txtButton);
	copy.appendChild(btnDelete);
	btnDelete.addEventListener('click', deleteColor);
}

const deleteColor = (event) => {
	if (event.target && event.target.classList.contains('delete')) {
		const remove = event.target.closest('.saveColor');
		remove.remove();
	}
}
    window.addEventListener("load", initialize);