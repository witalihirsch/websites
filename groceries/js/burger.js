const burger = document.querySelector(".item__burger");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const headerList = document.querySelector(".header__list");
const itemSignUp = document.querySelector(".item__sign-up");

burger.addEventListener("click", function() {
	header.classList.toggle("clicked");
	body.classList.toggle("lock");
	headerList.classList.toggle("clicked");
	itemSignUp.classList.toggle("clicked");
});