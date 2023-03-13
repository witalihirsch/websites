window.addEventListener("scroll", function() {
    var nav = document.querySelector(".navbar");
    nav.classList.toggle("scrolled", window.scrollY > 0);
});