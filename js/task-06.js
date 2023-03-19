const input = document.querySelector("#validation-input");
console.log(input);

input.addEventListener("blur", validationInput);
function validationInput() {
  if (input.dataset.length != input.value.length) {
    input.classList.remove("valid");
    return input.classList.add("invalid");
  }
  input.classList.remove("invalid");
  return input.classList.add("valid");
}


