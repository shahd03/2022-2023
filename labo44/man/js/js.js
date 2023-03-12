const input = document.getElementById('input');
const output = document.getElementById('output');
const countButton = document.getElementById('count-button');

countButton.addEventListener('click', () => {
    const searchTerm = prompt('What are you looking for?');
    if (searchTerm) {
        const regex = new RegExp(searchTerm, 'gi');
        const matchCount = (input.value.match(regex) || []).length;
        output.innerHTML = `The character "${searchTerm}" appears ${matchCount} times in the input text.`;
    }
});