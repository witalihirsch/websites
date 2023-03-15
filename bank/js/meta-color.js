const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");

// Check if the media query matches or is not available.
if (motion.matches) {
  let lastKnownScrollPosition = 0;
  let ticking = false;
  
  function changeColor(scrollPos) {
    const saturation = scrollPos / (document.body.scrollHeight / 100);
    const color = `hsl(24.3 ${saturation}% 54.2%)`;
    document.body.style.background = color
    document.querySelector('meta[name="theme-color"]').setAttribute('content', color)
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