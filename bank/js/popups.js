var navBurger = document.querySelector(".nav-burger");
var body = document.querySelector("body");
var navBar = document.querySelector(".navbar");
var navLogo = document.querySelector(".nav-logo");
var nav = document.querySelector(".nav");
var navMenu = document.querySelector(".nav-menu");
var wrapper = document.querySelector(".wrapper");
var footer = document.querySelector(".footer");
var getApp = document.querySelector("#get-app");
var navButton = document.querySelector(".nav-button");
var navbar = document.querySelector(".navbar");
var backToTop = document.querySelector(".back-to-top");
var closePopup = document.querySelector(".close-popup");

navBurger.addEventListener("click", function() {
    body.classList.toggle('active');
    navBar.classList.toggle("active");
    navLogo.classList.toggle("active");
    nav.classList.toggle("active");
    navMenu.classList.toggle("active");
    wrapper.classList.toggle("active");
    footer.classList.toggle("active");

    getApp.classList.remove("hide");
    getApp.classList.remove("show");
    navbar.classList.remove("hide");
    wrapper.classList.remove("hide");
    footer.classList.remove("hide");
    backToTop.classList.remove("hide");
    body.classList.remove("hide");
});

navButton.addEventListener("click", function() {
    getApp.classList.add("show");
    getApp.classList.remove("hide");
    body.classList.add("hide");
    wrapper.classList.add("hide");
    footer.classList.add("hide");
    nav.classList.add("hide");
    navLogo.classList.add("hide");
    backToTop.classList.add("hide");
    navBurger.classList.add("hide");
});

closePopup.addEventListener("click", function() {
    getApp.classList.remove("show");
    getApp.classList.add("hide");
    body.classList.remove("hide");
    wrapper.classList.remove("hide");
    footer.classList.remove("hide");
    nav.classList.remove("hide");
    navLogo.classList.remove("hide");
    backToTop.classList.remove("hide");
    navBurger.classList.remove("hide");
});