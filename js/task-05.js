const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', (event) => {
    if (inputName.value === '') {
        return outputName.textContent = "Anonymous"
    } else {
        return outputName.textContent = event.currentTarget.value;
    }
})




