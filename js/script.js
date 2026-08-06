/* =====================================
   EPIC JOURNEYS JAVASCRIPT
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


},1200);


}


});







// ===============================
// MOBILE MENU
// ===============================


const menuBtn=document.getElementById("menuBtn");

const navLinks=document.getElementById("navLinks");



if(menuBtn && navLinks){


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
// CLOSE MENU AFTER CLICK
// ===============================


document.querySelectorAll(".nav-links a").forEach(link=>{


link.addEventListener("click",()=>{


if(navLinks){

navLinks.classList.remove("active");

}


if(menuBtn){


const icon=menuBtn.querySelector("i");


icon.classList.remove("fa-xmark");

icon.classList.add("fa-bars");


}


});


});







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


const items=document.querySelectorAll(

".card,.offer-card,.review,.gallery-box img,.info-box"

);



const observer=new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}



});


},{


threshold:0.2


});






items.forEach(item=>{


item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".6s";


observer.observe(item);


});







// ===============================
// BUTTON CLICK EFFECT
// ===============================


document.querySelectorAll("button,a").forEach(btn=>{


btn.addEventListener("click",()=>{


btn.style.transform="scale(.95)";


setTimeout(()=>{


btn.style.transform="";


},150);



});


});







// ===============================
// CONTACT FORM
// ===============================


const contactForm=document.querySelector(".contact-form");


if(contactForm){


contactForm.addEventListener("submit",(e)=>{


e.preventDefault();


alert("Thank you! We will contact you soon.");


contactForm.reset();


});


}







// ===============================
// FOOTER YEAR UPDATE
// ===============================


const footer=document.querySelector("footer p");


if(footer){


footer.innerHTML=

"© "+new Date().getFullYear()+

" Epic Journeys Travel | Developed by Abinesh Sarma";


}
