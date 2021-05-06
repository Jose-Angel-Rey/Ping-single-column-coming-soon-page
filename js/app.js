let form = document.getElementById("form");
let email = document.getElementById("email");
let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

form.addEventListener("submit", (e) => {
  if (!email.value.match(emailPattern) || email.value === "") {
    e.preventDefault();
    email.classList.add("form__email-input--invalid");
    email.nextElementSibling.classList.add("input-error--visible");
  } else {
    email.classList.remove("form__email-input--invalid");
    email.nextElementSibling.classList.remove("input-error--visible");
  }
});
