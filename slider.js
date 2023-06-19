const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
let isTransitioning = false;

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
