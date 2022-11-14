const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#psw');
const confpassword = document.querySelector('#confpsw');
const errorMessage = document.querySelector('#error');
const form = document.querySelector('#form')
form.addEventListener("submit", (e) => {
    const message = [];
    //    let validname = userNameValid();
    //    let validemail = emailValid();
    if (password.value.length <= 10) {
        message.push("Password must be longer than 10 characters")
    }
    // if (password.value != confpassword) {
    //     message.push("conform password does not")
    // }
    if (message.length > 0) {
        e.preventDefault()
        errorMessage.innerText = message;
    }
});

function userNameValid() {
    if (username.value.length <= 6) {
        message.push("username must be longer than 6 characters")
    } else {
        let regexName = /^[a-zA-Z\s]+$/;
        if (regexName.test(username) === false) {
            message.push("Invalid Username")
        } else {
            if (username == " ")
                message.push("username is required")
        }

    }

}

function emailValid() {
    if (email == " ") {
        message.push("email is required")
    } else {
        let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regexEmail.test(email) === false) {
            message.push("Invalid Email")
        }
    }
}
function confPasswordVlid() {
    if (password.value != confpassword) {
        message.push("conform password does not")
    }
}

