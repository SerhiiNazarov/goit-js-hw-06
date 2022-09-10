const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
    return;
  }
  const dataRef = { email: email.value, password: password.value };
  console.log(dataRef);
  event.currentTarget.reset();
}
