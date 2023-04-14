const links = document.querySelectorAll(".menu__link");
const menuContent = document.querySelector(".swiper__body");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        links.forEach(link => link.classList.remove("menu__link-active", "link-active"));
        link.classList.add("menu__link-active", "link-active");

        const contentId = link.getAttribute("href").replace("#", "");
        console.log(contentId);
        const content = document.getElementById(contentId);

        menuContent.querySelectorAll(".swiper").forEach(card => {
            if (card.id === contentId) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});
