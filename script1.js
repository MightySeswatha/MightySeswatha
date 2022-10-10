window.onload = function(){

const check = document.getElementById("container");
const form1 = document.getElementById("form1");
const signUP = document.getElementById("signUP");

check.onclick = function(){
check.classList.toggle("container_active");
}

signUP.onclick = function(){
form1.classList.toggle("none");
}

}
