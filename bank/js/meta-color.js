function updateThemeColor() {
    const totalHeight = document.body.clientHeight;
    const center = window.scrollY + window.innerHeight / 2;
    const contentCenter = totalHeight / 2;
    const percent = Math.abs(center - contentCenter) / (totalHeight / 2) * 100;

    const color = getGradientColor(percent);

    document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
    document.body.style.background = color;
}

function getGradientColor(percent) {
    const startColor = [175, 230, 255];
    const midColor = [253, 207, 255];
    const endColor = [175, 230, 255];

    if (percent <= 50) {
        const factor = percent / 50;
        const r = Math.round(startColor[0] + (midColor[0] - startColor[0]) * factor);
        const g = Math.round(startColor[1] + (midColor[1] - startColor[1]) * factor);
        const b = Math.round(startColor[2] + (midColor[2] - startColor[2]) * factor);
        return `rgb(${r}, ${g}, ${b})`;
    } else {
        return `rgb(253, 207, 255)`;
    }
}

window.addEventListener('load', updateThemeColor);
window.addEventListener('scroll', updateThemeColor);



function updateThemeColorDark() {
    const totalHeight = document.body.clientHeight;
    const center = window.scrollY + window.innerHeight / 2;
    const contentCenter = totalHeight / 2;
    const percent = Math.abs(center - contentCenter) / (totalHeight / 2) * 100;

    const color = getGradientColorDark(percent);

    document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
    document.body.style.background = color;
}

function getGradientColorDark(percent) {
    const startColor = [5, 20, 25];
    const midColor = [34, 7, 25];
    const endColor = [5, 20, 25];

    if (percent <= 50) {
        const factor = percent / 50;
        const r = Math.round(startColor[0] + (midColor[0] - startColor[0]) * factor);
        const g = Math.round(startColor[1] + (midColor[1] - startColor[1]) * factor);
        const b = Math.round(startColor[2] + (midColor[2] - startColor[2]) * factor);
        return `rgb(${r}, ${g}, ${b})`;
    } else {
        return `rgb(34, 7, 25)`;
    }
}

window.addEventListener('load', updateThemeColorDark);
window.addEventListener('scroll', updateThemeColorDark);