let slideIndex = 0;

function showSlide(n) {
    const slides = document.querySelector('.slider');
    const totalSlides = slides.children.length;

    // Ensure the index stays within bounds
    slideIndex = (n + totalSlides) % totalSlides;

    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function changeSlide(n) {
    showSlide(slideIndex += n);
}

// Auto slide change (optional)
// setInterval(() => {
//     changeSlide(1);
// }, 3000);
