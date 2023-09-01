const openPosterModal = Array.from(document.querySelectorAll(".image-text"));
const posterModal = Array.from(document.querySelectorAll(".poster-modal__container"));
const closePosterModal = Array.from(document.querySelectorAll(".close-poster-modal"));

for(let i = 0; i < openPosterModal.length; i++) {
    openPosterModal[i].addEventListener("click", () => {
        posterModal[i].classList.add("poster-modal");
    });
    posterModal[i].addEventListener("click", () => {
        posterModal[i].classList.remove("poster-modal");
    });
}




var navbar = document.querySelector("header");
var navbarContent = document.querySelector(".navbar");

window.addEventListener("scroll", change);

function change() {
    var topOfPage = window.scrollY;
    
    if(topOfPage >= 100) {
        navbar.classList.add("nav--scrolled");
    }
    
    else {
        navbar.classList.remove("nav-scrolled");
    }
}


const contactContainer = document.querySelector(".contact-btn__container");
const contactContainerIcon = document.querySelector(".contact-btn__container i");
const contactModalLinks = document.querySelector(".contact-modal__container");

contactContainer.addEventListener("click", () => {
contactContainer.classList.toggle("contact--toggled");
contactContainerIcon.classList.toggle("contact-icon--toggled");
contactModalLinks.classList.toggle("contact-links--toggled");
});