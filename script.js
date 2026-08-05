/* =================================
   EPIC JOURNEYS TRAVEL
   FINAL JAVASCRIPT
================================= */



// ===============================
// MOBILE MENU
// ===============================


const menuIcon = document.querySelector(".menu-icon");

const navLinks = document.querySelector(".nav-links");



if(menuIcon && navLinks){


    menuIcon.addEventListener("click",()=>{


        navLinks.classList.toggle("active");


    });


}







// Close mobile menu after clicking link

const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach(item=>{


    item.addEventListener("click",()=>{


        navLinks.classList.remove("active");


    });


});







// ===============================
// SCROLL ANIMATION
// ===============================


const cards = document.querySelectorAll(
".service-card, .offer-banner, .booking-banner"
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



cards.forEach(card=>{


    card.classList.add("hidden");


    observer.observe(card);


});








// ===============================
// BUTTON CLICK EFFECT
// ===============================


const buttons = document.querySelectorAll("a, button");



buttons.forEach(button=>{


    button.addEventListener("click",()=>{


        button.style.transform="scale(0.95)";


        setTimeout(()=>{


            button.style.transform="";


        },150);


    });


});







// ===============================
// FOOTER YEAR
// ===============================


const footerText=document.querySelector("footer p");



if(footerText){


footerText.innerHTML =

"© "+new Date().getFullYear()+
" Epic Journeys Travel | Developed by Abinesh Sarma | All Rights Reserved";


}
