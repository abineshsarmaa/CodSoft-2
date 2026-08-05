// ===============================
// Mobile Menu Toggle
// ===============================


const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");


if(menuBtn && menu){


    menuBtn.addEventListener("click",()=>{


        menu.classList.toggle("active");


    });


}




// ===============================
// Close Menu After Click
// ===============================


const links = document.querySelectorAll(".menu a");


links.forEach(link=>{


    link.addEventListener("click",()=>{


        if(menu){

            menu.classList.remove("active");

        }


    });


});




// ===============================
// Scroll Animation
// ===============================


const cards = document.querySelectorAll(
".info-card, .about-box, .offer-card"
);



const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";


        }


    });



});





cards.forEach(card=>{


    card.style.opacity="0";

    card.style.transform="translateY(50px)";

    card.style.transition="0.8s";


    observer.observe(card);


});





// ===============================
// Form Submit Message
// ===============================


const forms = document.querySelectorAll("form");


forms.forEach(form=>{


    form.addEventListener("submit",function(){


        alert(
        "Thank you! Your request has been submitted."
        );


    });


});
