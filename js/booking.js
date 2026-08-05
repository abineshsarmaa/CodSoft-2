/* =====================================
   EPIC JOURNEYS BOOKING JAVASCRIPT
===================================== */



// ===============================
// BOOKING FORM SUBMIT
// ===============================


const bookingForm = document.querySelector("form");



if(bookingForm){


bookingForm.addEventListener("submit",(e)=>{


e.preventDefault();



showMessage(
"🎉 Booking request submitted successfully!"
);



bookingForm.reset();



});


}








// ===============================
// MESSAGE POPUP
// ===============================


function showMessage(text){



const message=document.createElement("div");



message.className="booking-message";



message.innerHTML=text;



document.body.appendChild(message);





setTimeout(()=>{


message.remove();


},3000);



}








// ===============================
// INPUT ANIMATION
// ===============================


const inputs=document.querySelectorAll(
"input,select,textarea"
);



inputs.forEach(input=>{


input.addEventListener("focus",()=>{


input.style.transform="scale(1.02)";


});



input.addEventListener("blur",()=>{


input.style.transform="scale(1)";


});


});








// ===============================
// BUTTON CLICK EFFECT
// ===============================


const buttons=document.querySelectorAll("button,a");



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
