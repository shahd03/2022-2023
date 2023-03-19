const setup = () => {

    let sentence = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i] === "de") {
            words[i] = "het";
            console.log(words[i]);
        }
    }
}
console.log(words.join(" "));
window.addEventListener("load", setup);