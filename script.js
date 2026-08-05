/* =====================================
   EPIC JOURNEYS PREMIUM JAVASCRIPT
===================================== */



// ===============================
// MOBILE MENU
// ===============================


const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");



if(menuBtn && navLinks){


    menuBtn.addEventListener("click",()=>{


        navLinks.classList.toggle("active");



        // icon change


        const icon = menuBtn.querySelector("i");


        if(navLinks.classList.contains("active")){


            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");


        }else{


            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");


        }


    });


}







// Close menu after clicking link


document.querySelectorAll(".nav-links a").forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


    });


});








// ===============================
// SCROLL CARD ANIMATION
// ===============================


const elements = document.querySelectorAll(
".service-card, .offer-banner, .booking-banner"
);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{threshold:0.2});



elements.forEach(el=>{


el.classList.add("hidden");


observer.observe(el);


});








// ===============================
// BUTTON CLICK EFFECT
// ===============================


const buttons = document.querySelectorAll("a,button");



buttons.forEach(btn=>{


btn.addEventListener("click",()=>{


btn.style.transform="scale(.95)";


setTimeout(()=>{


btn.style.transform="";


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
" Epic Journeys Travel | Developed by Abinesh Sarma | All Rights Reserved";


}
