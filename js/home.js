/* =====================================
   EPIC JOURNEYS HOME JAVASCRIPT
===================================== */



// ===============================
// PAGE LOADER
// ===============================


window.addEventListener("load",()=>{

    const loader = document.querySelector(".loader");

    if(loader){

        setTimeout(()=>{

            loader.style.opacity="0";

            setTimeout(()=>{

                loader.style.display="none";

            },500);


        },1000);

    }

});






// ===============================
// MOBILE MENU
// ===============================


const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");



if(menuBtn && navLinks){


menuBtn.addEventListener("click",()=>{


    navLinks.classList.toggle("active");


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






// Close mobile menu after click


document.querySelectorAll(".nav-links a").forEach(link=>{


    link.addEventListener("click",()=>{


        if(navLinks){

            navLinks.classList.remove("active");

        }


    });


});







// ===============================
// DARK MODE
// ===============================


const themeBtn = document.getElementById("themeBtn");



if(themeBtn){


themeBtn.addEventListener("click",()=>{


    document.body.classList.toggle("dark-mode");


    const icon = themeBtn.querySelector("i");



    if(document.body.classList.contains("dark-mode")){


        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");


        localStorage.setItem("theme","dark");



    }else{


        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");


        localStorage.setItem("theme","light");


    }



});


}







// Remember Theme


window.addEventListener("load",()=>{


const savedTheme = localStorage.getItem("theme");



const icon = document.querySelector("#themeBtn i");



if(savedTheme==="dark"){


document.body.classList.add("dark-mode");



if(icon){

icon.classList.remove("fa-moon");

icon.classList.add("fa-sun");

}


}



});








// ===============================
// SCROLL ANIMATION
// ===============================


const animatedItems = document.querySelectorAll(

".card, .review, .gallery-box img, .booking-banner"

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

"© " + new Date().getFullYear() +

" Epic Journeys Travel | Developed by Abinesh Sarma";


}
