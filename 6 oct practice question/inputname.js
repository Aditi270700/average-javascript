function ron(){
let name = document.querySelector('#name').value;
let email = document.querySelector('#email').value;
let password = document.querySelector('#password').value;
console.log(name,email,password);

if(name === ""){
document.querySelector('#errorname').innerHTML = "please enter your name"
    let selectname = document.querySelector('#name');
    selectname.style.borderColor = "red";
    selectname.style.outlineColor = "red";
    return false;
}
else if(email === ""){
document.querySelector('#erroremail').innerHTML = "please enter your email"
let selectemail = document.querySelector('#email');
selectemail.style.borderColor = "red";
selectemail.style.outlineColor = "red";
return false;
}
else if(!(email.includes('@') && email.includes('.com'))){
    document.querySelector('#erroremail').innerHTML = "please valid your email"
    selectemail = document.querySelector('#email');
    selectemail.style.borderColor = "red";
    selectemail.style.outlineColor = "red";
    return false;
}
else if(password === ""){
document.querySelector('#errorpassword').innerHTML = "please enter your password";
let selectpassword = document.querySelector('#password');
selectpassword.style.borderColor = "red";
selectpassword.style.outlineColor = "red";
return false;
}
else if(password.length !== 8){
 document.querySelector('#errorpassword').innerHTML = "please enter your password 8 digit";
 selectpassword = document.querySelector('#password');
 selectpassword.style.borderColor = "red";
 selectpassword.style.outlineColor = "red";
 return false;
}
else if(!
    (password.match(/[!@#$%^&*()<>]/)
    &&
    password.match(/[0123456789]/)
    &&
    password.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)
    &&
    password.match(/[qwertyuiopasdfghjklzxcvbnm]/)
)){
document.querySelector('#errorpassword').innerHTML = "please enter your password have one digit,lowercase,uppercaseand symbol"
selectpassword = document.querySelector('#password');
selectpassword.style.borderColor = "red";
selectpassword.style.outlineColor = "red";
return false;
}
}
function s(arg){
console.log(arg)
let selectedinput = document.querySelector(`#${arg}`);
selectedinput.style.borderColor = "grey";
selectedinput.style.outlineColor = "grey";
document.querySelector(`#error${arg}`).innerHTML = "";
}
