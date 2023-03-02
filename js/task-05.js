const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', (event) => {
    if (inputName.value === ""){
        return outputName.textContent = "Anonimus"
        
}
    else{ 
        return outputName.textContent = event.currentTarget.value;
    
    }
});