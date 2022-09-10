function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreateElRef = document.querySelector("button[data-create]");
const btnDestroyElRef = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("#controls").firstElementChild;

let amount = 0;

function changeAmout() {
  return (amount = Number(inputRef.value));
}

inputRef.addEventListener("change", () => {
  return changeAmout();
});

const createBoxes = function (amount) {
  for (let i = 0; i < amount; i++) {
    boxesRef.insertAdjacentHTML("beforeend", ` <div></div>`);
    boxesRef.lastElementChild.style.backgroundColor = `${getRandomHexColor()}`;
    boxesRef.lastElementChild.style.width = `${30 + i * 10}px`;
    boxesRef.lastElementChild.style.height = `${30 + i * 10}px`;
  }
};

btnCreateElRef.addEventListener("click", () => {
  createBoxes(amount);
  amount = "";
  inputRef.value = "";
});

btnDestroyElRef.addEventListener("click", () => {
  boxesRef.innerHTML = "";
  inputRef.value = "";
  amount = "";
});
