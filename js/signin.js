/* =====================================
   EPIC JOURNEYS SIGN IN JAVASCRIPT
===================================== */



// ===============================
// SHOW / HIDE PASSWORD
// ===============================


const password = document.getElementById("password");

const showPassword = document.getElementById("showPassword");



if(showPassword){


showPassword.addEventListener("click",()=>{


if(password.type === "password"){


password.type="text";


showPassword.classList.remove("fa-eye");


showPassword.classList.add("fa-eye-slash");



}else{


password.type="password";


showPassword.classList.remove("fa-eye-slash");


showPassword.classList.add("fa-eye");



}



});


}








// ===============================
// LOGIN FORM
// ===============================


const signinForm=document.querySelector("form");



if(signinForm){


signinForm.addEventListener("submit",(e)=>{


e.preventDefault();



showAlert(
"✅ Login successful! Welcome to Epic Journeys."
);



});


}







// ===============================
// MESSAGE BOX
// ===============================


function showAlert(text){


const box=document.createElement("div");


box.className="login-message";


box.innerHTML=text;



document.body.appendChild(box);



setTimeout(()=>{


box.remove();


},3000);



}








// ===============================
// BUTTON ANIMATION
// ===============================


const button=document.querySelector("button");



if(button){


button.addEventListener("click",()=>{


button.style.transform="scale(.95)";



setTimeout(()=>{


button.style.transform="";


},150);



});


}
