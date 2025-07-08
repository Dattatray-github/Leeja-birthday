// slider.js
const images = document.querySelectorAll('.slider img');
let current = 0;

function showNextImage() {
  images[current].style.display = 'none';
  current = (current + 1) % images.length;
  images[current].style.display = 'block';
}

images.forEach((img, i) => {
  img.style.display = i === 0 ? 'block' : 'none';
  img.style.maxWidth = '90%';
  img.style.borderRadius = '20px';
  img.style.transition = 'transform 0.5s ease';
});

setInterval(showNextImage, 3000);
