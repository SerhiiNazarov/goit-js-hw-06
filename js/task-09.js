function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const btnRef = document.querySelector(".change-color");
const textRef = document.querySelector(".color");

btnRef.addEventListener("click", () => {
  bodyRef.style.backgroundColor = `${getRandomHexColor()}`;
  console.log((textRef.textContent = `${getRandomHexColor()}`));
});
