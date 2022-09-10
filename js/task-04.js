const counterRef = document.querySelector("#value");

let counterValue = (counterRef.textContent = 0);

const btnMinus = document.querySelector('button[data-action="decrement"]');

const btnPlus = document.querySelector('button[data-action="increment"]');

const handleClickMinus = () => {
  counterValue -= 1;
  counterRef.textContent = counterValue;
};

const handleClickPlus = () => {
  counterValue += 1;
  counterRef.textContent = counterValue;
};

btnMinus.addEventListener("click", handleClickMinus);
btnPlus.addEventListener("click", handleClickPlus);
