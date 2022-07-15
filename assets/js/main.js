// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
  })
);

// Carousel
const slides = document.querySelectorAll('.slides');
const dot = document.querySelectorAll('.dot');

let slideIndex = 0;
showSlides(slideIndex);
autoSlides();

function changeSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(' current', ' ');
  }
  slides[slideIndex - 1].style.display = 'block';
  dot[slideIndex - 1].className += ' current';
}

function autoSlides() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(' current', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dot[slideIndex - 1].className += ' current';

  setTimeout(autoSlides, 5000);
}
