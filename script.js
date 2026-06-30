const tipButton = document.getElementById('tipButton');
const tipBox = document.getElementById('tip');

tipButton.addEventListener('click', () => {
    tipBox.classList.toggle('hidden');
    tipButton.textContent = tipBox.classList.contains('hidden') ? 'Show cooking tip' : 'Hide cooking tip';
});
