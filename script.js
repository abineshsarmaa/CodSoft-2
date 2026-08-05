/* =================================
   EPIC JOURNEYS TRAVEL JS
================================= */



// ===============================
// Mobile Menu
// ===============================


const menuBtn = document.querySelector(".menu-icon");

const navMenu = document.querySelector(".nav-links");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navMenu.classList.toggle("active");

    });

}






// ===============================
// Scroll Animation
// ===============================


const animatedCards = document.querySelectorAll(
".service-card, .about-card, .offer-card, .contact-card"
);



const observer = new IntersectionObserver((items)=>{


    items.forEach(item=>{


        if(item.isIntersecting){

            item.target.classList.add("show");

        }


    });


},{


threshold:0.2


});



animatedCards.forEach(card=>{


    card.classList.add("hidden");


    observer.observe(card);


});







// ===============================
// Booking / Contact Form
// ===============================


const forms = document.querySelectorAll("form");



forms.forEach(form=>{


form.addEventListener("submit",(e)=>{


e.preventDefault();



alert(
"Thank you! Your information has been submitted successfully."
);



form.reset();



});


});







// ===============================
// Button Click Animation
// ===============================


const buttons = document.querySelectorAll("a,button");



buttons.forEach(btn=>{


btn.addEventListener("click",()=>{


btn.style.transform="scale(0.95)";


setTimeout(()=>{


btn.style.transform="";


},150);



});


});








// ===============================
// Footer Year Update
// ===============================


const footer = document.querySelector("footer p");



if(footer){


footer.innerHTML =

"© "+new Date().getFullYear()+
" Epic Journeys Travel | Developed by Abinesh Sarma | All Rights Reserved";


}
