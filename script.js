// Mobile Menu Toggle

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        menu.classList.toggle("active");


        const icon = menuBtn.querySelector("i");


        if(menu.classList.contains("active")){

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        }
        else{

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }


    });

}




// Close mobile menu after clicking link

const menuLinks = document.querySelectorAll(".menu a");


menuLinks.forEach(link=>{


    link.addEventListener("click",()=>{


        if(menu){

            menu.classList.remove("active");

        }


    });


});




// Simple form message

const forms = document.querySelectorAll("form");


forms.forEach(form=>{


    form.addEventListener("submit",(e)=>{


        alert("Thank you! Your request has been submitted.");


    });


});
