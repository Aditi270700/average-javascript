function run(){
let name = document.querySelector('#name').value;
let email = document.querySelector('#email').value;
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
if(email === ""){
document.querySelector('#erroremail').innerHTML = "please enter your email";
let selectemail = document.querySelector('#email');
selectemail.style.borderColor = "red";
selectemail.style.outlineColor = "red";
return false;
}
if(mobile === ""){
document.querySelector('#errormobile').innerHTML = "please enter your mobile number";
let selectmobile = document.querySelector('#mobile');
selectmobile.style.borderColor = "red";
selectmobile.style.outlineColor = "red";
return false;
}
if(password === ""){
document.querySelector('#errorpassword').innerHTML = "please enter your password";
let selectpassword = document.querySelector('#password');
selectpassword.style.borderColor = "red";
selectpassword.style.outline = "red";
return false;
}
if(cpassword === ""){
document.querySelector('#errorcpassword').innerHTML = "please enter your cpassword";
let selectcpassword = document.querySelector('#cpassword');
selectcpassword.style.borderColor = "red";
selectcpassword.style.outline = "red";
return false;
}
}
function s(){
let selectinput = document.querySelector('#name');
let selecterrorname = document.querySelector('#errorname');
selecterrorname.innerHTML = ""
selectinput.style.borderColor = "grey";
selectinput.style.outlineColor = "grey";
return false;
}
function t(){
let selectinput = document.querySelector('#email');
let selecterroremail = document.querySelector('#erroremail');
selecterroremail.innerHTML = ""
selectinput.style.borderColor = "grey";
selectinput.style.outlineColor = "grey";
return false;
}
function u(){
let selectinput = document.querySelector('#mobile');
let selecterrormobile = document.querySelector('#errormobile');
selecterrormobile.innerHTML = "";
selectinput.style.borderColor = "grey";
selectinput.style.outlineColor = "grey";
return false;
}
function v(){
let selectinput = document.querySelector('#password');
let selecterrorpassword = document.querySelector('#errorpassword');
selecterrorpassword.innerHTML = "";
selectinput.style.borderColor = "grey";
selectinput.style.outlineColor = "grey";
return false;
}
function w(){
let selectinput = document.querySelector('#cpassword');
let selecterrorcpassword = document.querySelector('#errorcpassword');
selecterrorcpassword.innerHTML = "";
selectinput.style.borderColor = "grey";
selectinput.style.outlineColor = "grey";
return false;
}