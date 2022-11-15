const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const psw = document.querySelector("#psw");
const button = document.querySelector("#submit");
const conPsw = document.querySelector("#conPsw");

form.addEventListener("submit", e =>
{
e.preventDefault();

});

const errorList = []

function checkInputs()
{
const usernameValue = username.value;
const emailValue = email.value;
const pswValue = psw.value;
const conPswValue = conPsw.value;

    if(usernameValue == "")
    {
        showErrors('Username cannot be blank');
    
    }else if(emailValue == ""){
        showErrors("email cannot be blank");
    
    } else if(pswValue == "")
    {
        showErrors("password cannot be blank");
        
    } else if(pswValue !== conPswValue)
    {
        showErrors("confirm password not matched");
        
    }else {
        clearErrors();
    }
     
    displayErrors()
} 

function showErrors(errorMessage){
    errorList.push(errorMessage);
}

function clearErrors(){
    errorList.length = 0;
}

function displayErrors(){
    let errorString = "";
   
    errorList.forEach((value)=>{
        errorString = errorString + value + "\n";

    })
    
    setErrorFor(errorString);
   
}

function setErrorFor(message)
{
    const formControl = button.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
}