const decrementBtn = document.querySelector ('#counter [data-action="decrement"]');
const incrementBtn = document.querySelector ('#counter [data-action="increment"]');
const counterEl = document.querySelector ('#value');

let counterValue = 0;

const decrementClicValue = () => ((counterValue -= 1), (counterEl.textContent = counterValue));
const incrementClicValue = () => ((counterValue += 1), (counterEl.textContent = counterValue));

decrementBtn.addEventListener ('click', decrementClicValue);
incrementBtn.addEventListener ('click', incrementClicValue);