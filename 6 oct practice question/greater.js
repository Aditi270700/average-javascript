function run(){
let number1 = parseInt(window.prompt("Enter your number 1"))
let number2 = parseInt(window.prompt("Enter your number 2"))
let number3 = parseInt(window.prompt("Enter your number 3"))
if(number1>number2 && number1>number3){
window.alert("number1 is greatest");
}
else if(number2>number1 && number2>number3){
window.alert("number2 is greatest");
}
else{
window.alert("number3 is greatest");
}
}
run();