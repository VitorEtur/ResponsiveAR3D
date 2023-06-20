const slides2 = document.querySelectorAll('.carousel2 .carousel2-slide');
let currentSlide2 = 0;

function showSlide2(index) {
  slides2[currentSlide2].classList.remove('active');
  slides2[index].classList.add('active');
  currentSlide2 = index;
}

function nextSlide2() {
  let nextSlideIndex2 = currentSlide2 + 1;
  if (nextSlideIndex2 >= slides2.length) {
    nextSlideIndex2 = 0;
  }
  showSlide2(nextSlideIndex2);
}

setInterval(nextSlide2, 5000); // Troca de slide a cada 5 segundos (5000 ms)

showSlide2(currentSlide2);

const carousel2Arrows = document.querySelectorAll('.carousel2-arrow');

carousel2Arrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    if (isTransitioning) return;
    let nextSlideIndex;
    if (arrow.classList.contains('carousel2-arrow-left')) {
      nextSlideIndex = currentSlide2 - 1;
      if (nextSlideIndex < 0) {
        nextSlideIndex = slides2.length - 1;
      }
    } else if (arrow.classList.contains('carousel2-arrow-right')) {
      nextSlideIndex = currentSlide2 + 1;
      if (nextSlideIndex >= slides2.length) {
        nextSlideIndex = 0;
      }
    }
    showSlide2(nextSlideIndex);
  });
});
