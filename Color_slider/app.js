let box = document.getElementById('box');
let input = document.querySelector('input');

input.addEventListener("input", () => {
    box.style.backgroundColor = input.value;
    box.style.borderColor = input.value;
    box.style.borderRadius = input.value;
});