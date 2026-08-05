/* =====================================
   EPIC JOURNEYS HOME JAVASCRIPT
   PREMIUM VERSION
===================================== */



// ===============================
// PAGE LOADER
// ===============================


window.addEventListener("load",()=>{


const loader=document.querySelector(".loader");



if(loader){


setTimeout(()=>{


loader.style.display="none";


},1800);


}



});









// ===============================
// MOBILE MENU
// ===============================


const menuBtn=document.getElementById("menuBtn");

const navLinks=document.getElementById("navLinks");



if(menuBtn){


menuBtn.addEventListener("click",()=>{


navLinks.classList.toggle("active");



const icon=menuBtn.querySelector("i");



if(navLinks.classList.contains("active")){


icon.classList.remove("fa-bars");


icon.classList.add("fa-xmark");


}

else{


icon.classList.remove("fa-xmark");


icon.classList.add("fa-bars");


}



});


}








// ===============================
// DARK MODE
// ===============================


const themeBtn=document.getElementById("themeBtn");



if(themeBtn){


themeBtn.addEventListener("click",()=>{


document.body.classList.toggle("dark");



const icon=themeBtn.querySelector("i");



if(document.body.classList.contains("dark")){


icon.classList.remove("fa-moon");


icon.classList.add("fa-sun");


}

else{


icon.classList.remove("fa-sun");


icon.classList.add("fa-moon");


}



});


}









// ===============================
// SCROLL ANIMATION
// ===============================


const cards=document.querySelectorAll(

".card,.review,.gallery-box img"

);



const observer=new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";


entry.target.style.transform="translateY(0)";


}



});


},{


threshold:.2


});





cards.forEach(card=>{


card.style.opacity="0";


card.style.transform="translateY(50px)";


card.style.transition="0.8s ease";



observer.observe(card);


});









// ===============================
// BUTTON CLICK EFFECT
// ===============================


const buttons=document.querySelectorAll("a,button");



buttons.forEach(btn=>{


btn.addEventListener("click",()=>{


btn.style.transform="scale(.95)";



setTimeout(()=>{


btn.style.transform="";


},150);



});


});









// ===============================
// FOOTER YEAR
// ===============================


const footer=document.querySelector("footer p");



if(footer){


footer.innerHTML=

"© "+new Date().getFullYear()+

" Epic Journeys Travel | Developed by Abinesh Sarma";


}
