
window.onload = function(){
const btn2 = document.getElementById("btn2");
const user2 = document.getElementById("user2");
const email2 = document.getElementById("email2");
const reap_pass2 = document.getElementById("reap_pass2");

const text_pass3 = document.getElementById("text_pass3");

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

  if(pass2.value != reap_pass2.value){
  text_pass3.textContent = "The password does not match";
  text_pass3.classList.add("error2");
  text_pass2.textContent = "The password does not match";
  text_pass2.classList.add("error2");
  }

  if(user2.value != "" && pass2.value != "" && user2.value != "Enter your username!" && pass2.value != "Enter your password!" && pass2.value == reap_pass2.value){alert("test");}

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
  }
  else if(pass2.value != reap_pass2.value){
    pass2.classList.add("error1");
    reap_pass2.classList.add("error1");
  }
  else {
    pass2.value = "";
    reap_pass2.value = "";
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
  }
  else if(pass2.value != reap_pass2.value){
    pass2.classList.add("error1");
    reap_pass2.classList.add("error1");
  }
  else {
    pass2.value = "";
    reap_pass2.value = "";
    reap_pass2.classList.add("accept1");
  }

}, false)
}
