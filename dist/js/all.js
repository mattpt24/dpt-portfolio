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
var closeContactModal = document.querySelector(".close-contact-modal");
contactContainer.addEventListener("click", function () {
  contactContainer.classList.toggle("contact--toggled");
  contactContainerIcon.classList.toggle("contact-icon--toggled");
  contactModalLinks.classList.toggle("contact-links--toggled");
});
closeContactModal.addEventListener("click", function () {
  contactContainer.classList.toggle("contact--toggled");
  contactContainerIcon.classList.toggle("contact-icon--toggled");
  contactModalLinks.classList.toggle("contact-links--toggled");
});
var openBrandingModal = Array.from(document.querySelectorAll(".brand ul li"));
var closeBrandingModal = Array.from(document.querySelectorAll(".close-branding-modal"));
var brandingModal = Array.from(document.querySelectorAll(".logos-branding__modal"));
var _loop2 = function _loop2(_i) {
  openBrandingModal[_i].addEventListener("click", function () {
    brandingModal[_i].classList.add("logos-branding-modal--activated");
  });
  brandingModal[_i].addEventListener("click", function () {
    brandingModal[_i].classList.remove("logos-branding-modal--activated");
  });
};
for (var _i = 0; _i <= openBrandingModal.length; _i++) {
  _loop2(_i);
}