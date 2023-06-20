const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
let isTransitioning = false;
let touchStartX = 0;
let touchEndX = 0;

function showSlide(index) {
  if (isTransitioning) return;

  isTransitioning = true;
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  slides[index].classList.add('active');
  dots[index].classList.add('active');

  currentSlide = index;

  setTimeout(() => {
    isTransitioning = false;
  }, 2000); // Ajuste o valor conforme necessário (tempo de duração da transição em milissegundos)
}

function nextSlide() {
  if (isTransitioning) return;

  let nextSlideIndex = currentSlide + 1;
  if (nextSlideIndex >= slides.length) {
    nextSlideIndex = 0;
  }
  showSlide(nextSlideIndex);
}

function startAutoplay() {
  setInterval(nextSlide, 5000); // Troca de slide a cada 5 segundos (5000 ms)
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    if (isTransitioning || index === currentSlide) return;
    showSlide(index);
  });
});

showSlide(currentSlide);
startAutoplay();

const carousel = document.querySelector('.carousel');

carousel.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});

carousel.addEventListener('touchmove', (event) => {
  touchEndX = event.touches[0].clientX;
});

carousel.addEventListener('touchend', () => {
  const touchDiff = touchEndX - touchStartX;
  if (touchDiff > 0) {
    const nextSlideIndex = currentSlide - 1;
    if (nextSlideIndex < 0) {
      showSlide(slides.length - 1);
    } else {
      showSlide(nextSlideIndex);
    }
  } else if (touchDiff < 0) {
    nextSlide();
  }
});
