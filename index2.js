const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#psw");
const confpassword = document.querySelector("#confpsw");
const errorMessage = document.querySelector("#error");
const form = document.querySelector("#form");
form.addEventListener("submit", function (e) {
  userNameValid();
//   emailValid();
//   confPasswordVlid();

  e.preventDefault();
});
// validation for username
  function userNameValid() {
    // alert("hiii");
     if (username.value.length <= 6) {
       showError(username,"username must be longer than 6 characters");
     } else {
       let regexName = /^[a-zA-Z\s]+$/;
       if (regexName.test(username) === false) {
         showError(username,"Invalid Username");
       } else {
         if (username == " ") 
           showError(username,"username is required");
       }
     }
   }
// validation for email
   function emailValid() {
    if (email == " ") {
      showError(email,"email is required");
    } else {
      let regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regexEmail.test(email) === false) {
        showError(email,"Invalid Email");
      }
    }
  }

// validation for confPassword
  function confPasswordVlid() {
    if (password.value != confpassword) {
      showError(confpassword,"conform password does not match");
    }
  }
// function for error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classname = "form-control error";
  const span = formControl.querySelector("span");
  span.innerText = message;
}
