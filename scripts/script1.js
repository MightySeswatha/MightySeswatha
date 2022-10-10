window.onload = function(){

const check = document.getElementById("container");
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const signUP = document.getElementById("signUP");
const signIN = document.getElementById("signIN");

check.onclick = function(){
check.classList.toggle("container_active");
}

signUP.onclick = function(){
form1.classList.add("none");
form2.classList.remove("none");
form2.classList.add("block_INform2");
}

signIN.onclick = function(){
form2.classList.add("none");
form1.classList.remove("none");
form2.classList.remove("block_INform2");
}

}
