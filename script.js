// sign in
const form = document.querySelector(".form-wrapper");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#passwordConfirmation");
const passwordError = document.querySelector("#passwordError");

passwordConfirmation.addEventListener("input", (event) => {
  console.log("password");
  if (password.value !== passwordConfirmation.value) {
    passwordError.textContent = "Passwords need to be identical";
    passwordError.className = "error active";
  } else if (password.validity.tooShort) {
    passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
    passwordError.className = "error active";
  } else if (password.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
  }
});

email.addEventListener("input", (event) => {
  //check validity of email
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError(email, emailError);
  }
});

form.addEventListener("submit", (event) => {
  // if the email field is valid, we let the form submit
  if (
    !email.validity.valid ||
    !password.validity.valid
  ) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
    window.location.href = 'mybooks.html'
  }
});

function showError(input, inputError) {
  console.log(input);
  if (input.validity.valueMissing) {
    inputError.textContent = "You need to enter an email address.";
  } else if (input.validity.typeMismatch) {
    inputError.textContent = "Entered value needs to be an email address.";
  } else if (input.validity.tooShort) {
    inputError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;

    inputError.className = "error active";
  }
}
