const headerLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    // loop through each header link
    headerLinks.forEach(link => {
        const href = link.getAttribute('href');
        const target = document.querySelector(href);
        const targetTop = target.offsetTop;
        const targetHeight = target.offsetHeight;

        // check if current scroll position is within the target section
        if (currentScrollPos >= targetTop && currentScrollPos < targetTop + targetHeight) {
            link.classList.add('header__link-active');
            link.classList.add('link-active');
        } else {
            link.classList.remove('header__link-active');
            link.classList.remove('link-active');
        }
    });
});



const buttons = document.querySelectorAll('.item__btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('item__btn-active')) {
            buttons.forEach((btn) => {
                btn.classList.remove('item__btn-active');
            });
            button.classList.add('item__btn-active');
        }
    });
});



const inputAdd = document.querySelectorAll('.input__add');
const tooltip = document.querySelector('.item__tooltip');
const itemCart = document.getElementById('item__cart-img');

function handleClick() {
    tooltip.classList.add('item__tooltip--show');
    setTimeout(() => {
        tooltip.classList.remove('item__tooltip--show');
    }, 3000);

    inputAdd.forEach(inputAdd => {
        inputAdd.removeEventListener('click', handleClick);
        itemCart.setAttribute("src", "img/icon/cart-full.svg");
    });
}

inputAdd.forEach(inputAdd => {
    inputAdd.addEventListener('click', handleClick);
});