const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#psw");
const confpassword = document.querySelector("#confpsw");
const form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
  userNameValid();
  emailValid();
  passwordValid();
  confPasswordValid();

  e.preventDefault();
});
// validation for username
function userNameValid() {
  console.log("hiii", username);
  let regexName = /^[a-zA-Z\s]+$/;
  if (username.value.length <= 6 || !username.value) {
    showError(
      username,
      "username must be longer than 6 characters & field is required"
    );
  } else if (!regexName.test(username.value)) {
    //console.log("-----------------", username.value);
    showError(username, "Invalid Username");
  } else {
    showSuccess(username);
  }
}
// validation for email
function emailValid() {
  let regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value === null) {
    showError(email, "email is required");
  } else if (regexEmail.test(email.value) === false) {
    showError(email, "Invalid Email");
  } else {
    showSuccess(email);
  }
}
//validaton for password
function passwordValid() {
  let regexPass =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
  if (regexPass.test(password.value) === false) {
    showError(password, "Invalid Password");
  }
  else{
    showSuccess(password);
  }
}

// validation for confPassword
function confPasswordValid() {
  if (password.value != confpassword.value) {
    showError(confpassword, "conform password does not match");
  }
  else{
    showSuccess(confpassword);
  }
}
// function for error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classname = "form-control error";
  const span = formControl.querySelector("span");
  span.innerText = message;
}
// function for show
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = "form-control success";
}
