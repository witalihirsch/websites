if ('ontouchstart' in window || navigator.maxTouchPoints) {
    document.querySelectorAll('*:hover').forEach(el => el.classList.remove(':hover'));
}