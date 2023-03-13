const image = document.getElementById("nav-logo-img");
const appStore = document.getElementById("app-store");
const googlePlay = document.getElementById("google-play");
const applePay = document.getElementById("apple-pay");
const googlePay = document.getElementById("google-pay");
const device = document.getElementById("device");
const ellipseTop = document.getElementById("ellipse-top");
const ellipseCenter = document.getElementById("ellipse-center");
const ellipseBottom = document.getElementById("ellipse-bottom");
const cards = document.getElementById("cards");
const linkedin = document.getElementById("linkedin");
const youtube = document.getElementById("youtube");
const twitter = document.getElementById("twitter");

function changeImage() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        image.setAttribute("src", "images/bank-dark.svg");

        appStore.setAttribute("src", "images/app-store-dark.svg");
        googlePlay.setAttribute("src", "images/google-play-dark.svg");

        cards.setAttribute("src", "images/cards-dark.png");

        applePay.setAttribute("src", "images/apple-pay-dark.svg");
        googlePay.setAttribute("src", "images/google-pay-dark.svg");

        device.setAttribute("src", "images/device-dark.png");

        ellipseTop.setAttribute("src", "images/ellipse-top-dark.svg");
        ellipseCenter.setAttribute("src", "images/ellipse-center-dark.svg");
        ellipseBottom.setAttribute("src", "images/ellipse-bottom-dark.svg");

        linkedin.setAttribute("src", "images/linkedin-dark.svg");
        youtube.setAttribute("src", "images/youtube-dark.svg");
        twitter.setAttribute("src", "images/twitter-dark.svg");
    } else {
        image.setAttribute("src", "images/bank.svg");

        appStore.setAttribute("src", "images/app-store.svg");
        googlePlay.setAttribute("src", "images/google-play.svg");

        cards.setAttribute("src", "images/cards.png");

        applePay.setAttribute("src", "images/apple-pay.svg");
        googlePay.setAttribute("src", "images/google-pay.svg");

        device.setAttribute("src", "images/device.png");

        ellipseTop.setAttribute("src", "images/ellipse-top.svg");
        ellipseCenter.setAttribute("src", "images/ellipse-center.svg");
        ellipseBottom.setAttribute("src", "images/ellipse-bottom.svg");

        linkedin.setAttribute("src", "images/linkedin.svg");
        youtube.setAttribute("src", "images/youtube.svg");
        twitter.setAttribute("src", "images/twitter.svg");
    }
}

changeImage();

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", changeImage);