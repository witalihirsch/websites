window.addEventListener('mousemove', function(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;
    var deltaX = mouseX - centerX;
    var deltaY = mouseY - centerY;
    var translateX = (deltaX / centerX) * 50;
    var translateY = (deltaY / centerY) * 50;
    document.querySelector('#ellipse-top').style.transform = 'translateX(' + translateX + 'px) translateY(' + translateY + 'px)';
    document.querySelector('#ellipse-center').style.transform = 'translateX(' + translateX + 'px) translateY(' + translateY + 'px)';
    document.querySelector('#ellipse-bottom').style.transform = 'translateX(' + translateX + 'px) translateY(' + translateY + 'px)';
});

var topContent = document.querySelector(".top-content");
var centerContentTop = document.querySelector(".center-content-top");
var centerContentCenter = document.querySelector(".center-content-center");

function fadeOutOnScroll(element) {
	if (!element) {
		return;
	}
	
	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
	var elementHeight = element.offsetHeight;
	var scrollTop = document.documentElement.scrollTop;
	
	var opacity = 1;
	
	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight * 1.5;
	}
	
	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

function scrollHandler() {
	fadeOutOnScroll(topContent);
	fadeOutOnScroll(centerContentTop);
	fadeOutOnScroll(centerContentCenter);
}

window.addEventListener('scroll', scrollHandler);