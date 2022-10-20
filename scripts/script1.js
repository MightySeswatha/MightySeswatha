window.onload = function(){

const check = document.getElementById("container");
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const signUP = document.getElementById("signUP");
const signIN = document.getElementById("signIN");
const forgot = document.getElementById("forgot");

const body = document.getElementById("body");
const user1 = document.getElementById("user1");
const pass1 = document.getElementById("pass1");
const btn1 = document.getElementById("btn1");
const test = document.getElementById("test");
const frame1 = document.getElementById("frame1");
const cross = document.getElementById("cross");

const btn2 = document.getElementById("btn2");
const user2 = document.getElementById("user2");
const email2 = document.getElementById("email2");
const reap_pass2 = document.getElementById("reap_pass2");

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

forgot.onclick = function(){
body.classList.add("shadow");
frame1.classList.toggle("none");
}

user1.onclick = function(){
if(user1.value == "Enter your username!"){
  user1.value = "";
  user1.classList.remove("error1");
}
else{user1.classList.remove("accept1");}
}

pass1.onclick = function(){
if(pass1.value == "Enter your password!"){
  pass1.value = "";
  pass1.setAttribute('type', 'password');
  pass1.classList.remove("error1");
}
else{pass1.classList.remove("accept1");}
}

btn1.addEventListener('click', function() {

  if(user1.value != "" && pass1.value != "" && user1.value != "Enter your username!" && pass1.value != "Enter your password!"){alert("test");}

  if(user1.value === "" || user1.value == "Enter your username!") {
    user1.classList.remove("accept1");
    user1.value = "Enter your username!";
    user1.classList.add("error1");
  } else {
    user1.classList.add("accept1");
  }

  if(pass1.value === "" || pass1.value == "Enter your password!") {
    pass1.classList.remove("accept1");
    pass1.setAttribute('type', 'text');
    pass1.value = "Enter your password!";
    pass1.classList.add("error1");
  } else {
    pass1.classList.add("accept1");
  }

}, false)

cross.onclick = function(){
body.classList.remove("shadow");
frame1.classList.toggle("none");
}

/**/

user2.onclick = function(){
if(user2.value == "Enter your username!"){
  user2.value = "";
  user2.classList.remove("error1");
}
else{user2.classList.remove("accept1");}
}

pass2.onclick = function(){
if(pass2.value == "Enter your password!"){
  pass2.value = "";
  pass2.setAttribute('type', 'password');
  pass2.classList.remove("error1");
}
else{pass2.classList.remove("accept1");}
}

email2.onclick = function(){
if(email2.value == "Enter your email!"){
  email2.value = "";
  email2.classList.remove("error1");
}
else{email2.classList.remove("accept1");}
}

reap_pass2.onclick = function(){
if(reap_pass2.value == "Repeat your password!"){
  reap_pass2.value = "";
  reap_pass2.setAttribute('type', 'password');
  reap_pass2.classList.remove("error1");
}
else{reap_pass2.classList.remove("accept1");}
}

btn2.addEventListener('click', function() {

  if(user2.value != "" && pass2.value != "" && user2.value != "Enter your username!" && pass2.value != "Enter your password!"){alert("test");}

  if(user2.value === "" || user2.value == "Enter your username!") {
    user2.classList.remove("accept1");
    user2.value = "Enter your username!";
    user2.classList.add("error1");
  } else {
    user2.classList.add("accept1");
  }

  if(pass2.value === "" || pass2.value == "Enter your password!") {
    pass2.classList.remove("accept1");
    pass2.setAttribute('type', 'text');
    pass2.value = "Enter your password!";
    pass2.classList.add("error1");
  } else {
    pass2.classList.add("accept1");
  }

  if(email2.value === "" || email2.value == "Enter your email!") {
    email2.classList.remove("accept1");
    email2.value = "Enter your email!";
    email2.classList.add("error1");
  } else {
    email2.classList.add("accept1");
  }

  if(reap_pass2.value === "" || reap_pass2.value == "Repeat your password!") {
    reap_pass2.classList.remove("accept1");
    reap_pass2.setAttribute('type', 'text');
    reap_pass2.value = "Repeat your password!";
    reap_pass2.classList.add("error1");
  } else {
    reap_pass2.classList.add("accept1");
  }

}, false)

}
