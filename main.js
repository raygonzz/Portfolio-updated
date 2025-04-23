document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
   
function toggleMenu() {
    const visibility = navLinks.getAttribute('data-visible');
       
    if (visibility === "false") {
            navLinks.setAttribute('data-visible', "true");
            overlay.setAttribute('data-visible', "true");
            menuToggle.setAttribute('aria-expanded', "true");
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
            navLinks.setAttribute('data-visible', "false");
            overlay.setAttribute('data-visible', "false");
            menuToggle.setAttribute('aria-expanded', "false");
            document.body.style.overflow = ''; // Re-enable scrolling
    }
 }
        navLinks.setAttribute('data-visible', "false");
    overlay.setAttribute('data-visible', "false");
   
    menuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
   
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel-container");

  carousels.forEach(carousel => {
    const track = carousel.querySelector(".carousel-track");
    const images = carousel.querySelectorAll(".carousel-image");
    const prevBtn = carousel.querySelector(".carousel-button.prev");
    const nextBtn = carousel.querySelector(".carousel-button.next");
    let index = 0;

    function updateCarousel() {
      const width = images[0].clientWidth;
      track.style.transform = `translateX(-${index * width}px)`;
    }

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % images.length;
      updateCarousel();
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      updateCarousel();
    });

    let startX = 0;
    track.addEventListener("touchstart", e => startX = e.touches[0].clientX);
    track.addEventListener("touchend", e => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) nextBtn.click();
      else if (endX - startX > 50) prevBtn.click();
    });

    window.addEventListener("resize", updateCarousel);
  });
});
