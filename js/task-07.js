const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", (Event) => {
    textEl.style.fontSize = (`${Event.currentTarget.value}px`);
});