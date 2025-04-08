if (typeof pdfjsLib === 'undefined') {
    console.error("PDF.js library is not loaded!");
} else {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

    const url = 'slides.pdf';

    pdfjsLib.getDocument(url).promise.then(pdf => {
        pdf.getPage(1).then(page => {
            const scale = 1.5;
            const viewport = page.getViewport({ scale });

            const canvas = document.getElementById('pdf-canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext);
        });
    }).catch(error => {
        console.error("Error loading PDF:", error);
    });
}

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