const setThemeColor = (color) => {
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute('content', color)
  }
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const { isIntersecting, target } = entry
        if (isIntersecting) {
          const color = window.getComputedStyle(target).getPropertyValue("background-color");
          setThemeColor(color)
        }
      })
  }, {
    root: document.getElementById('viewport'),
    rootMargin: "1px 0px -100% 0px",
    treshold: 0.1
  })
  
  document.querySelector('body').forEach(section => {
    observer.observe(section)
  })
}