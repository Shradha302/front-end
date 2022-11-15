const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const psw = document.querySelector("#psw");
const button = document.querySelector("#submit");
const conPsw = document.querySelector("#conPsw");

form.addEventListener("submit", e =>
{
e.preventDefault();

checkInputs();
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
    
    } else{
        setSuccessFor(username);
    }

    if(emailValue == ""){
        showErrors("email cannot be blank");
    
    } else if (!isEmail(emailValue))
    {
        showErrors("not a valid email");
    
    } else {
        setSuccessFor(email);
    }
    if(pswValue =="")
    {
        showErrors("password cannot be blank");
        
    } else {
        setSuccessFor(psw);
    }
 
    if(conPswValue !== pswValue)
    {
        showErrors("confirm password not matched");
        
    } 
     else {
        setSuccessFor(conPsw)
    }
    displayErrors()
} 

function showErrors(errorMessage){
    errorList.push(errorMessage);
    console.log("showErrors====>", errorMessage)
}

function clearErrors(){
    errorList = [];
}

function displayErrors(){
    let errorString = "";
   
    errorList.forEach((value)=>{
        errorString = errorString + value + "\n";

    })
    
    setErrorFor(button, errorString);
   
}

function setErrorFor(input, message)
{
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}

function setSuccessFor(input)
{
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


