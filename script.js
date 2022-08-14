const form= document.getElementById("form");
const username= document.getElementById("username");
const email= document.getElementById("email");
const password= document.getElementById("password");
const password2= document.getElementById("password2");

form.addEventListener('student',e=>{
    e.preventListener();
    checkInput();
});

function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    if (usernameValue === ''){
        setError(username,'Username Cannot Be Blank');
    }
    else{
        setSuccess(username);
    }
    if (emailValue === ''){
        setError(email,'Email Cannot Be Blank');
    }
    else if(!isEmail(emailValue))
    {
        setError(email,'Not valid Email');
    }
    else{
        setSuccess(email);
    }
    if (passwordValue === ''){
        setError(password,'Password Cannot Be Blank');
    }
    else{
        setSuccess(password);
    }
    if (password2Value === ''){
        setError(password2,'Password Cannot Be Blank');
    }
    else if(passwordValue !== password2Value){
        setError(password2,'Password Doesnot Match' );
    }
    else{
        setSuccess(password2)
    }
}
function setError(input, message){
    const formControl = input.parentElement;
const small = c1.querySelector('small');
formControl.classname ='c1 error';
small.innerText = message;
}
function isEmail(email){

return/^(([^<>()\[\]\\.,;:\@s"]+(\.[^<>()\[\]\\.,;:\s@"]+)|(".+"))@((\[[0-9]{1,3}\.[0-9]
{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+[a-zA-Z]{2,}))$/.test(email);
}
function setSuccess(){
const formControl= input.parentElement;
formControl.classname='c1 success';
}