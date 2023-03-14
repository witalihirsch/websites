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