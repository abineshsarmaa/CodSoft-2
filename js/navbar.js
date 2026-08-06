/* =====================================
   EPIC JOURNEYS NAVBAR
===================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const themeBtn = document.getElementById("themeBtn");
const body = document.body;

/* Mobile Menu */
menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});

/* Close menu after click */

document.querySelectorAll("#navLinks a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

/* Dark Mode */

if(localStorage.getItem("theme") === "dark"){
    body.classList.add("dark");
    themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';
}

themeBtn.addEventListener("click",()=>{

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';
    }else{
        localStorage.setItem("theme","light");
        themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';
    }

});

/* Close menu on resize */

window.addEventListener("resize",()=>{

    if(window.innerWidth > 768){

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});
