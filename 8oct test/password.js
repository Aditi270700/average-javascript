function run (){
let password = document.querySelector('#password').value;
console.log(password);
if(password === ""){
   selectpassword = document.querySelector('#password') ;
  document.querySelector('#errorpassword').innerHTML = "please enter your password"
  selectpassword.style.borderColor = "red";
  selectpassword.style.outlineColor = "red";
  return false;
}
else if(password.length !==8){
 selectpassword = document.querySelector('#password') ;
  document.querySelector('#errorpassword').innerHTML = "please enter your password 8 digit"
  selectpassword.style.borderColor = "red";
  selectpassword.style.outlineColor = "red";
  return false;   
}
else if(!
    (password.match(/[!@#$%^&*()]/)
&&
password.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)
&&
password.match(/[qwertyuiopasdfghjklzxcvbnm]/)
&&
password.match(/[0123456789]/)
)){
  selectpassword = document.querySelector('#password') ;
  document.querySelector('#errorpassword').innerHTML = "please enter your password at least uppercase, lowercase,number and spcial character"
  selectpassword.style.borderColor = "red";
  selectpassword.style.outlineColor = "red";
  return false;  
}
}
function s(){
let selectinput = document.querySelector('#password')
document.querySelector('#password').innerHTML = "";
selectinput.style.borderColor = "grey";
selectinput.style.outlineColor = "grey";
}