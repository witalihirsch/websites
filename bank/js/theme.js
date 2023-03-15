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

var imagesToLoad = [
    //light theme images preload
    "images/app-store.svg",
    "images/google-play.svg",
    "images/cards.png",
    "images/apple-pay.svg",
    "images/google-pay.svg",
    "images/device.png",
    "images/ellipse-top.svg",
    "images/ellipse-center.svg",
    "images/ellipse-bottom.svg",
    "images/linkedin.svg",
    "images/youtube.svg",
    "images/twitter.svg",

    //dark theme images preload
    "images/app-store-dark.svg",
    "images/google-play-dark.svg",
    "images/cards-dark.png",
    "images/apple-pay-dark.svg",
    "images/google-pay-dark.svg",
    "images/device-dark.png",
    "images/ellipse-top-dark.svg",
    "images/ellipse-center-dark.svg",
    "images/ellipse-bottom-dark.svg",
    "images/linkedin-dark.svg",
    "images/youtube-dark.svg",
    "images/twitter-dark.svg",
];

var images = [];

for (var i = 0; i < imagesToLoad.length; i++) {
    images[i] = new Image();
    images[i].onload = function() {
        console.log(imagesToLoad[i] + " is loaded");
    };
    images[i].src = imagesToLoad[i];
}

const themeStylesheet = document.querySelector("#theme-style");
const defaultButton = document.querySelector(".theme-default");
const lightButton = document.querySelector(".theme-light");
const darkButton = document.querySelector(".theme-dark");

const userTheme = localStorage.getItem("theme");

const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");

function setTheme(themeName, buttonElement) {
    localStorage.setItem("theme", themeName);

    defaultButton.classList.remove("clicked");
    lightButton.classList.remove("clicked");
    darkButton.classList.remove("clicked");
    buttonElement.classList.add("clicked");

    buttonElement.classList.add("checked");

    themeStylesheet.setAttribute("href", themeName);

    if (themeName === "css/dark.css") {
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

        if (motion.matches) {
            let lastKnownScrollPosition = 0;
            let ticking = false;

            function changeColor(scrollPos) {
                const saturation = scrollPos / (document.body.scrollHeight / 300);
                const color = `hsl(${saturation} 66% 8%)`;
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

        if (motion.matches) {
            let lastKnownScrollPosition = 0;
            let ticking = false;

            function changeColor(scrollPos) {
                const saturation = scrollPos / (document.body.scrollHeight / 300);
                const color = `hsl(${saturation} 85% 85%)`;
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
    }
}

if (userTheme) {
    setTheme(userTheme, userTheme === "css/dark.css" ? darkButton : userTheme === "css/light.css" ? lightButton : defaultButton);
}

window.onload = function() {
    checkSystemColor();

    if (defaultButton.classList.contains("checked")) {
        defaultButton.classList.add("clicked");
    }

    if (lightButton.classList.contains("checked")) {
        lightButton.classList.add("clicked");
    }

    if (darkButton.classList.contains("checked")) {
        darkButton.classList.add("clicked");
    }
}

defaultButton.addEventListener("click", function() {
    setTheme("css/style.css", defaultButton);
    defaultButton.classList.add("checked");
    lightButton.classList.remove("checked");
    darkButton.classList.remove("checked");

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
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

        if (motion.matches) {
            let lastKnownScrollPosition = 0;
            let ticking = false;

            function changeColor(scrollPos) {
                const saturation = scrollPos / (document.body.scrollHeight / 300);
                const color = `hsl(${saturation} 66% 8%)`;
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

        if (motion.matches) {
            let lastKnownScrollPosition = 0;
            let ticking = false;

            function changeColor(scrollPos) {
                const saturation = scrollPos / (document.body.scrollHeight / 300);
                const color = `hsl(${saturation} 85% 85%)`;
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
    }
});

lightButton.addEventListener("click", function() {
    setTheme("css/light.css", lightButton);
    defaultButton.classList.remove("checked");
    lightButton.classList.add("checked");
    darkButton.classList.remove("checked");
});

darkButton.addEventListener("click", function() {
    setTheme("css/dark.css", darkButton);
    defaultButton.classList.remove("checked");
    lightButton.classList.remove("checked");
    darkButton.classList.add("checked");
});

if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e) {
        if (e.matches && defaultButton.classList.contains("clicked")) {
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

            if (motion.matches) {
                let lastKnownScrollPosition = 0;
                let ticking = false;

                function changeColor(scrollPos) {
                    const saturation = scrollPos / (document.body.scrollHeight / 300);
                    const color = `hsl(${saturation} 66% 8%)`;
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
        } else if (!e.matches && defaultButton.classList.contains("clicked")) {
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

            if (motion.matches) {
                let lastKnownScrollPosition = 0;
                let ticking = false;

                function changeColor(scrollPos) {
                    const saturation = scrollPos / (document.body.scrollHeight / 300);
                    const color = `hsl(${saturation} 85% 85%)`;
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
        }
    });
}

function checkSystemColor() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        if (defaultButton.classList.contains("clicked")) {
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

            if (motion.matches) {
                let lastKnownScrollPosition = 0;
                let ticking = false;

                function changeColor(scrollPos) {
                    const saturation = scrollPos / (document.body.scrollHeight / 300);
                    const color = `hsl(${saturation} 66% 8%)`;
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
        }
    } else {
        if (defaultButton.classList.contains("clicked")) {
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

            if (motion.matches) {
                let lastKnownScrollPosition = 0;
                let ticking = false;

                function changeColor(scrollPos) {
                    const saturation = scrollPos / (document.body.scrollHeight / 300);
                    const color = `hsl(${saturation} 85% 85%)`;
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
        }
    }
}

window.onload = checkSystemColor;