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
  }

  for (let e = 0; e < boxesRef.children.length; e++) {
    boxesRef.children[e].style.backgroundColor = `${getRandomHexColor()}`;
    boxesRef.children[e].style.width = `${30 + e * 10}px`;
    boxesRef.children[e].style.height = `${30 + e * 10}px`;
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
