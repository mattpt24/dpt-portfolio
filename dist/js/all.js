"use strict";

var openPosterModal = Array.from(document.querySelectorAll(".image-text"));
var posterModal = Array.from(document.querySelectorAll(".poster-modal__container"));
var closePosterModal = Array.from(document.querySelectorAll(".close-poster-modal"));
var _loop = function _loop(i) {
  openPosterModal[i].addEventListener("click", function () {
    posterModal[i].classList.add("poster-modal");
  });
  posterModal[i].addEventListener("click", function () {
    posterModal[i].classList.remove("poster-modal");
  });
};
for (var i = 0; i < openPosterModal.length; i++) {
  _loop(i);
}
var navbar = document.querySelector("header");
var navbarContent = document.querySelector(".navbar");
window.addEventListener("scroll", change);
function change() {
  var topOfPage = window.scrollY;
  if (topOfPage >= 100) {
    navbar.classList.add("nav--scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
}
var contactContainer = document.querySelector(".contact-btn__container");
var contactContainerIcon = document.querySelector(".contact-btn__container i");
var contactModalLinks = document.querySelector(".contact-modal__container");
contactContainer.addEventListener("click", function () {
  contactContainer.classList.toggle("contact--toggled");
  contactContainerIcon.classList.toggle("contact-icon--toggled");
  contactModalLinks.classList.toggle("contact-links--toggled");
});