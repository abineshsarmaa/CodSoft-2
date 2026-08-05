const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");


menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");


    const icon = menuBtn.querySelector("i");


    if(menu.classList.contains("active")){

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    }else{

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});



// Mobile menu link click ke baad close

const menuLinks = document.querySelectorAll(".menu a");


menuLinks.forEach(link => {

    link.addEventListener("click",()=>{

        menu.classList.remove("active");


        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});
