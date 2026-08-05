/* =====================================
   EPIC JOURNEYS CONTACT JAVASCRIPT
===================================== */



// ===============================
// FORM SUBMIT MESSAGE
// ===============================


const contactForm = document.querySelector("form");



if(contactForm){


contactForm.addEventListener("submit",(e)=>{


e.preventDefault();



createMessage(
"✅ Thank you! Your message has been sent successfully."
);



contactForm.reset();



});


}







// ===============================
// SUCCESS MESSAGE BOX
// ===============================


function createMessage(text){


const message = document.createElement("div");


message.className="success-message";


message.innerHTML=text;



document.body.appendChild(message);




setTimeout(()=>{


message.remove();


},3000);



}








// ===============================
// BUTTON ANIMATION
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
// SCROLL REVEAL ANIMATION
// ===============================


const elements=document.querySelectorAll(
".contact-card,.contact-form,.map"
);



const observer=new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{

threshold:0.2

});



elements.forEach(element=>{


element.classList.add("hidden");


observer.observe(element);


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
