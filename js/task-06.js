const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", () => {
  const dataLength = Number(inputRef.dataset.length);
  if (dataLength === inputRef.value.length) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
});
