// ==========================
// Mobile Menu Toggle
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ==========================
// Close Mobile Menu on Click
// ==========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ==========================
// Sticky Navbar Shadow
// ==========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 20){

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});

// ==========================
// Scroll To Top Button
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.pageYOffset > 400){

        topBtn.style.display = "flex";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ==========================
// Smooth Fade Animation
// ==========================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
});

document.querySelectorAll(".product,.card,.director-card,.contact-card,.gallery-item,.company-card,.license-box").forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".8s";

observer.observe(item);

});
// ==========================
// IMAGE POPUP
// ==========================

function openImage(src){

document.getElementById("imagePopup").style.display="flex";

document.getElementById("popupImg").src=src;

}

function closeImage(){

document.getElementById("imagePopup").style.display="none";

}

// Close when clicking outside image

document.getElementById("imagePopup").addEventListener("click",function(e){

if(e.target===this){

closeImage();

}

});