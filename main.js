
const carouselImages = document.querySelectorAll('.carousel-img');

let currentIndex = 0;

function showNextImage() {
  carouselImages[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % carouselImages.length;
  carouselImages[currentIndex].style.display = 'block';
}
carouselImages[currentIndex].style.display = 'block';

setInterval(showNextImage, 3000);

