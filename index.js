//select all elements
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const gender = document.querySelector("#radiobtn");
const password = document.querySelector("#password");
const confpassword = document.querySelector("#confpassword");
//selecting error ul
const errors = document.querySelector(".error-list");
const errorTitle = document.querySelector(".error-title");
const formBox = document.querySelector('.right-content');

//validation messages
const lengthErrorMessage = "Username is less than 8 characters.";
const emailErrorMessage ="Email must be lower case, should have @ symbol, and other required validation in email field.";
const genderErrorMessage = "Gender field not selected.";
const passwordErrorMessage = "Password should not be less than 10 characters.";
const confPassErrorMessage = "Password and Confirm Password must be same";
//array to store errors
const errorMessages = [];
//console.log(username);
const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(gender.value);
    
  //    const charcode = username.value.charCode;
  //    if(charcode != 0){
  //        if(charcode < 97 || charcode > 122 ){
  //            console.log(emailErrorMessage);
  //            errorMessages.push(emailErrorMessage);
  //        }
  //    }
  // username length validation
  if (username.value.length < 8) {
    console.log(lengthErrorMessage);
    errorMessages.push(lengthErrorMessage);

    const errorbox = document.createElement("li");
    errorbox.classList.add("length-error");
    errorTitle.removeAttribute("hidden");
    errorMessages.push("errorTitle");
    errorbox.style.border = "1px solid red";
    errorbox.style.fontWeight = "700";
    errorbox.innerText = lengthErrorMessage;
    errors.appendChild(errorbox);
    username.value = "";
  }

  //email validation
  const emailregex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email.value.match(emailregex)) {
    console.log(emailErrorMessage);
    errorMessages.push(emailErrorMessage);
    const errorbox = document.createElement("li");
    errorbox.classList.add("email-error");
    errorbox.style.border = "1px solid red";
    errorbox.style.fontWeight = "700";
    errorbox.innerText = emailErrorMessage;
    errors.appendChild(errorbox);
    email.value = "";
  }
//   if(gender.value == ''){
//     console.log(genderErrorMessage);
//     errorMessages.push(genderErrorMessage);
//     const errorbox = document.createElement('li');
//     errorbox.classList.add("gender-error");
//     errorbox.style.border = "1px solid red";
//     errorbox.style.fontWeight = "700";
//     errorbox.innerText = genderErrorMessage;
//     errors.appendChild(errorbox);
//     gender.removeAttribute('checked');
//   }

  //password validation
  if (password.value.length < 10) {
    console.log(passwordErrorMessage);
    errorMessages.push(passwordErrorMessage);
    const errorbox = document.createElement("li");
    errorbox.classList.add("password-error");
    errorbox.style.border = "1px solid red";
    errorbox.style.fontWeight = "700";
    errorbox.innerText = passwordErrorMessage;
    errors.appendChild(errorbox);
  }
  //confirm password validation
  if (confpassword.value != password.value) {
    console.log(confPassErrorMessage);
    errorMessages.push(confPassErrorMessage);
    const errorbox = document.createElement("li");
    errorbox.classList.add("confpassword-error");
    errorbox.style.border = "1px solid red";
    errorbox.style.fontWeight = "700";
    errorbox.innerText = confPassErrorMessage;
    errors.appendChild(errorbox);
    password.value = "";
    confpassword.value = "";
  }
  if (errorMessages.length > 0) {
    // prevent the default
    event.preventDefault();
    //errorMessages.forEach(element => {});
    errorMessages.innerText = errors;
    //increase height of formBox to accomodate errors + form fields
    formBox.style.height = '550px';
    // //css for error box -->not working
    // for(i=0;i<errorMessages.length;i++){
    //     errorMessages[i].style.color='red';
    // }
  }
  if (errorMessages.length == 0) {
    //converting data into json object
    const myFormData = new FormData(form);
    for (item of myFormData) {
      event.preventDefault();
      //console.log(item);
    }
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    console.log(formDataObj);
  }
});

// addeventlistener to the form  --> next task
// const event = {
//     x: 'xyz',
//     y: 'zzz',
//     preventDefault(){
//         // dosomething
//     }
// }
// function myFunction() {
//     var x = document.getElementsByClassName("city");
//     for (var i = 0; i < x.length; i++) {
//       x[i].style.display = "none";
//     }
//   }
