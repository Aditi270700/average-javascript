function zoom(){
let selectimg = document.querySelector("#img");
selectimg.style.scale = "1.5";
selectimg.style.transition = "scale 0.5s"
}
function out(){
let selectimg = document.querySelector("#img");
selectimg.style.scale = "1";
selectimg.style.transition = "scale 0.5s"
}