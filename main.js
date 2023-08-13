//==========NAVBAR SECTION START=============
//navbar chnage color on scroll

window.addEventListener("scroll",()=>{
    document.querySelector("nav").classList.toggle("scroll",window.scrollY>90)
})


//show/hide navbar menu
const menu = document.querySelector(".navbar");
const menuBtn = document.querySelector("#open-nav");
const closeBtn = document.querySelector("#close-nav");

menuBtn.addEventListener("click",()=>{
    menu.style.display = "flex";
    closeBtn.style.display ="inline-block";
    menuBtn.style.display = "none";
})

//close navbar

const closeNav = () =>{
    menu.style.display = "none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";
}

closeBtn.addEventListener("click",closeNav)



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
