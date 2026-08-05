/* =====================================
   EPIC JOURNEYS ABOUT JAVASCRIPT
===================================== */



// ===============================
// SCROLL ANIMATION
// ===============================


const animatedElements = document.querySelectorAll(
".about-image, .about-content, .about-cards div, .box"
);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{

threshold:0.2

});




animatedElements.forEach(element=>{


element.classList.add("hidden");


observer.observe(element);


});







// ===============================
// BUTTON CLICK EFFECT
// ===============================


const buttons = document.querySelectorAll("a,button");



buttons.forEach(button=>{


button.addEventListener("click",()=>{


button.style.transform="scale(.95)";


setTimeout(()=>{


button.style.transform="";


},150);



});


});







// ===============================
// FOOTER YEAR UPDATE
// ===============================


const footer = document.querySelector("footer p");



if(footer){


footer.innerHTML =

"© "+new Date().getFullYear()+
" Epic Journeys Travel | Developed by Abinesh Sarma";


}
