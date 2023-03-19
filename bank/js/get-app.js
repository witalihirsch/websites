var getApp = document.querySelector("#get-app");
var navButton = document.querySelector(".nav-button");
var navbar = document.querySelector(".navbar");
var wrapper = document.querySelector(".wrapper");
var footer = document.querySelector(".footer");
var backToTop = document.querySelector(".back-to-top");
var body2 = document.querySelector("body");
var closePopup = document.querySelector(".close-popup");

navButton.addEventListener("click", function() {
    getApp.classList.add("show");
    body.classList.add("hide");
    getApp.classList.remove("hide");
});

closePopup.addEventListener("click", function() {
    getApp.classList.add("hide");
    body.classList.remove("hide");
    getApp.classList.remove("show");
});