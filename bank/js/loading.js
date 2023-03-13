window.addEventListener("load", function() {
    document.getElementById("loading").style.display = "none";
    document.querySelector(".wrapper").style.display = "flex";
    document.querySelector(".navbar").style.display = "block";
    document.querySelector(".footer").style.display = "flex";
});

var dots = document.querySelectorAll(".loading-dot");

for (var i = 0; i < dots.length; i++) {
    dots[i].style.animationDelay = (i - 1) * 0.1 + "s";
}