var bankTitle = document.querySelector("#bank-title");
var bankSection = document.querySelector(".bank-section");

bankTitle.addEventListener("click", function() {
    bankSection.classList.toggle('active');
});

var aboutTitle = document.querySelector("#about-title");
var aboutSection = document.querySelector(".about-section");

aboutTitle.addEventListener("click", function() {
    aboutSection.classList.toggle('active');
});

var socialsTitle = document.querySelector("#socials-title");
var socialsSection = document.querySelector(".socials");

socialsTitle.addEventListener("click", function() {
    socialsSection.classList.toggle('active');
});

var themeTitle = document.querySelector("#theme-title");
var themeSection = document.querySelector(".theme");

themeTitle.addEventListener("click", function() {
    themeSection.classList.toggle('active');
});