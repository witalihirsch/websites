var imagesToLoad = [
    "img/icon/cart-full.svg",
    "img/icon/cart-selected.svg",
    "img/icon/minus-hover.svg",
    "img/icon/plus-hover.svg",
    "img/icon/apple-hover.svg",
];

var images = [];

for (var i = 0; i < imagesToLoad.length; i++) {
    images[i] = new Image();
    images[i].src = imagesToLoad[i];
}