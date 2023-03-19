var navBurger = document.querySelector(".nav-burger");
var body = document.querySelector("body");
var navBar = document.querySelector(".navbar");
var navLogo = document.querySelector(".nav-logo");
var nav = document.querySelector(".nav");
var navMenu = document.querySelector(".nav-menu");
var wrapper = document.querySelector(".wrapper");
var footer = document.querySelector(".footer");

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