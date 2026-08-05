// ===============================
// Mobile Menu Toggle
// ===============================


const menuIcon = document.getElementById("menuIcon");

const navLinks = document.querySelector(".nav-links");



if(menuIcon){


menuIcon.addEventListener("click",()=>{


navLinks.classList.toggle("active");


});


}






// ===============================
// Scroll Animation
// ===============================


const cards = document.querySelectorAll(
".service-card, .about-card, .offer-card, .contact-card"
);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


});



cards.forEach(card=>{


card.classList.add("hidden");


observer.observe(card);


});







// ===============================
// Booking Form Message
// ===============================


const forms = document.querySelectorAll("form");



forms.forEach(form=>{


form.addEventListener("submit",(e)=>{


e.preventDefault();


alert(
"Thank you! Your request has been submitted successfully."
);


form.reset();


});


});






// ===============================
// Current Year Footer
// ===============================


const year = new Date().getFullYear();


const footerText = document.querySelector("footer p");


if(footerText){


footerText.innerHTML =
"© "+year+
" Epic Journeys Travel | Developed by Abinesh Sarma | All Rights Reserved";


}
