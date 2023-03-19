const input = document.querySelector("#font-size-control");

const span = document.querySelector("#text");

input.addEventListener("input", (event) => {
  const fontSize = event.currentTarget.value;
  span.style.fontSize = () => `${fontSize}px`;
});