/* =====================================
   EPIC JOURNEYS HOME JAVASCRIPT
===================================== */



// ===============================
// PAGE LOADER
// ===============================


window.addEventListener("load",()=>{


const loader=document.querySelector(".loader");


if(loader){


setTimeout(()=>{


loader.style.opacity="0";


setTimeout(()=>{


loader.style.display="none";


},500);



},1000);


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



let icon=themeBtn.querySelector("i");



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


entry.target.classList.add("show");


}



});


},{


threshold:.2


});




cards.forEach(card=>{


card.classList.add("hidden");


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
