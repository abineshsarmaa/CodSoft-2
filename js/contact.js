/* =====================================
   EPIC JOURNEYS CONTACT JAVASCRIPT
===================================== */



// ===============================
// SCROLL ANIMATION
// ===============================


const animatedItems = document.querySelectorAll(
".contact-card, .contact-form, .map"
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





animatedItems.forEach(item=>{


item.classList.add("hidden");


observer.observe(item);


});







// ===============================
// FORM SUBMIT
// ===============================


const form = document.querySelector("form");



if(form){


form.addEventListener("submit",(e)=>{


e.preventDefault();



showMessage(
"✓ Thank you! Your message has been sent successfully."
);



form.reset();



});


}








// ===============================
// CUSTOM MESSAGE
// ===============================


function showMessage(text){


const msg=document.createElement("div");


msg.className="message-box";


msg.innerHTML=text;



document.body.appendChild(msg);



setTimeout(()=>{


msg.remove();


},3000);



}








// ===============================
// BUTTON EFFECT
// ===============================


const buttons=document.querySelectorAll("a,button");



buttons.forEach(button=>{


button.addEventListener("click",()=>{


button.style.transform="scale(.95)";



setTimeout(()=>{


button.style.transform="";


},150);



});


});








// ===============================
// FOOTER YEAR
// ===============================


const footer=document.querySelector("footer p");



if(footer){


footer.innerHTML =

"© "+new Date().getFullYear()+
" Epic Journeys Travel | Developed by Abinesh Sarma";


}
