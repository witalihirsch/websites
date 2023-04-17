var body = document.querySelector("body");
const burger = document.querySelector(".item__burger");
const header = document.querySelector(".header");
const headerBurger = document.querySelector(".header__burger");
const headerRow = document.querySelector(".header__row");

burger.addEventListener("click", function() {
    body.classList.toggle('clicked');
    header.classList.toggle("clicked");
    burger.classList.toggle("clicked");
    headerBurger.classList.toggle("clicked");
    setTimeout(function() {
        headerRow.classList.toggle("clicked");
    }, 150);
});