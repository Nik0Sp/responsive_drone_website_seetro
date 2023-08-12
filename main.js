//==========NAVBAR SECTION START=============
//navbar chnage color on scroll

window.addEventListener("scroll",()=>{
    document.querySelector("nav").classList.toggle("scroll",window.scrollY>90)
})




//==========NAVBAR SECTION END=============
//==========FAQs SECTION START=============

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("open");


        // icon change
        const icon = faq.querySelector(".faq-icon i");
        if(icon.className == "uil uil-plus"){
            icon.className = "uil uil-minus"
        }else{
            icon.className = "uil uil-plus"
        }
    })
})
