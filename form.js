function run(){
let name = document.querySelector('#name').value;
let email= document.querySelector('#email').value;
let mobile = document.querySelector('#mobile').value;
let password = document.querySelector('#password').value;
let cpassword = document.querySelector('#cpassword').value;

console.log(name,email,mobile,password,cpassword);


if(name === ""){
document.querySelector('#errorname').innerHTML = "please enter your name";
let selectname = document.querySelector('#name');
selectname.style.borderColor = "red";
selectname.style.outlineColor = "red";
return false;
}
 else if(email === ""){
document.querySelector('#erroremail').innerHTML = "please enter your email";
let selectemail = document.querySelector('#email');
selectemail.style.borderColor = "red";
selectemail.style.outlineColor = "red";
return false;
}
else if(!(email.includes('@') && email.includes('.com'))){
document.querySelector('#erroremail').innerHTML = "please enter valid email";
let selectemail = document.querySelector('#email');
selectemail.style.borderColor = "red";
selectemail.style.outlineColor = "red";
return false;
}
 else if(mobile === ""){
document.querySelector('#errormobile').innerHTML = "please enter your mobile number";
let selectmobile = document.querySelector('#mobile');
selectmobile.style.borderColor = "red";
selectmobile.style.outlineColor = "red";
return false;
}
else if(mobile.length !== 10){
document.querySelector('#errormobile').innerHTML = "please enter your mobile number 10 digit";
let selectmobile = document.querySelector('#mobile');
selectmobile.style.borderColor = "red";
selectmobile.style.outlineColor = "red";
return false;
}
else if(isNaN(mobile)){
document.querySelector('#errormobile').innerHTML = "please enter your mobile number only integer";
let selectmobile = document.querySelector('#mobile');
selectmobile.style.borderColor = "red";
selectmobile.style.outlineColor = "red";
return false;
}
else if(password === ""){
document.querySelector('#errorpassword').innerHTML = "please enter your password";
let selectpassword = document.querySelector('#password');
selectpassword.style.borderColor = "red";
selectpassword.style.outline = "red";
return false;
}
else if(password.length !== 8){
document.querySelector('#errorpassword').innerHTML = "please enter your password only 8 digit";
let selectpassword = document.querySelector('#password');
selectpassword.style.borderColor = "red";
selectpassword.style.outline = "red";
return false;
}
else if(!
(
password.match(/[1234567890]/)
&&
password.match(/[!@#$%^&*()]/)
&&
password.match(/[qwertyuiopasdfghjklzxcvbnm]/)
&&
password.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)
)){
document.querySelector('#errorpassword').innerHTML = "please enter your password contain atleast 1digit,1 letter and symbol";
let selectpassword = document.querySelector('#password');
selectpassword.style.borderColor = "red";
selectpassword.style.outline = "red";
return false;
}
else if(password !== cpassword){
window.alert("password and confirm password not match");
document.querySelector('#cpassword').value = "";
document.querySelector('#password').value = "";
document.querySelector('#password').focus = "";
return false;
}
else if(cpassword === ""){
document.querySelector('#errorcpassword').innerHTML = "please enter your cpassword";
let selectcpassword = document.querySelector('#cpassword');
selectcpassword.style.borderColor = "red";
selectcpassword.style.outline = "red";
return false;
}
}

function s(aditi){
    console.log(aditi)
    let selectedinput = document.querySelector(`#${aditi}`);
    selectedinput.style.borderColor = "grey";
    selectedinput.style.outlineColor = "grey";
    document.querySelector(`#error${aditi}`).innerHTML = "";
}