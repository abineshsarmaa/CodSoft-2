/* =====================================
   EPIC JOURNEYS OFFERS JAVASCRIPT
===================================== */



// ===============================
// SCROLL ANIMATION
// ===============================


const offerCards = document.querySelectorAll(
".offer-card, .discount"
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





offerCards.forEach(card=>{


card.classList.add("hidden");


observer.observe(card);


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


const footer=document.querySelector("footer p");



if(footer){


footer.innerHTML=

"© "+new Date().getFullYear()+
" Epic Journeys Travel | Developed by Abinesh Sarma";


}
