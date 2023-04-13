const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

if (isTouchDevice) {
    document.addEventListener('touchstart', function() {
        document.querySelectorAll('*:hover').forEach(node => node.classList.remove('hover'));
    });
}