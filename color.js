document.addEventListener('DOMContentLoaded', () => {
    const viewer = document.querySelector('.pdf-viewer');
    if (viewer) {
        const toolbar = viewer.querySelector('.toolbar');
        if (toolbar) {
            toolbar.style.display = 'none';
        }
    }
});

document.addEventListener("mousemove", function(event) {
    let x = event.clientX / window.innerWidth;
    let y = event.clientY / window.innerHeight;

    let red = Math.round(x * 255);
    let green = Math.round(y * 255);
    let blue = Math.round((1 - x) * 255);

    document.querySelector(".header-text").style.color = `rgb(${red}, ${green}, ${blue})`;
    document.querySelector(".header-text2").style.color = `rgb(${red}, ${green}, ${blue})`;

});