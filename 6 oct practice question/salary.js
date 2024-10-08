function run (){
let salary  = parseInt(window.prompt("Enter the salary"));
if(salary<=300000){
window.alert("you should not want to pay tax");
}
else if(salary>=300000 && salary<=750000){
window.alert(("you should pay tax")+(salary*0.1));
}
else if( salary>=750000){
window.alert(("you should pay tax")+(salary*0.2));
}
}
run();