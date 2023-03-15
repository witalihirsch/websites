/*const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");

if (motion.matches) {
    let lastKnownScrollPosition = 0;
    let ticking = false;

    function changeColor(scrollPos) {
        const saturation = scrollPos / (document.body.scrollHeight / 300);
        const color = `hsl(${saturation} 85% 85%)`;
        document.body.style.background = color
        document.querySelector('meta[name="theme-color"]').setAttribute('content', color)
    }

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
}*/