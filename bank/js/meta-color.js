const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");

// Check if the media query matches or is not available.
if (motion.matches) {
    let lastKnownScrollPosition = 0;
    let ticking = false;
    
    function changeColor(scrollPos) {
        const gradient = `linear-gradient(0deg, rgba(253, 207, 238, 1) 0%, rgba(175, 248, 255, 1) 50%, rgba(253, 207, 238, 1) 100%)`;
        document.body.style.background = gradient;
        document.querySelector('meta[name="theme-color"]').setAttribute('content', gradient);
    }

    document.addEventListener('scroll', function(e) {
        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function() {
                changeColor(lastKnownScrollPosition)
                ticking = false;
            });

            ticking = true;
        }
    });
}