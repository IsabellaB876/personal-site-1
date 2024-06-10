// scroll text
const textPath = document.querySelector("#text-path");

const h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';

document.addEventListener("scroll", e => {
  let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  textPath.setAttribute("startOffset", (-percent * 10))
});

// big slides yellow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let images = document.getElementsByClassName("project-image");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    images[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
  images[slideIndex-1].style.display = "block";
}

// big slides blue
let slideIndexBlue = 1;
showSlidesBlue(slideIndexBlue);

function plusSlidesBlue(n) {
  showSlidesBlue(slideIndexBlue += n);
}

function currentSlideBlue(n) {
  showSlidesBlue(slideIndexBlue = n);
}

function showSlidesBlue(n) {
  let i;
  let slides = document.getElementsByClassName("slide-blue");
  let images = document.getElementsByClassName("blue-project-image");
  if (n > slides.length) {
    slideIndexBlue = 1
  }
  if (n < 1) {
    slideIndexBlue = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    images[i].style.display = "none";
  }

  slides[slideIndexBlue-1].style.display = "block";
  images[slideIndexBlue-1].style.display = "block";
}

// big slides red
let slideIndexRed = 1;
showSlidesRed(slideIndexRed);

function plusSlidesRed(n) {
  showSlidesRed(slideIndexRed += n);
}

function currentSlideRed(n) {
  showSlidesRed(slideIndexRed = n);
}

function showSlidesRed(n) {
  let i;
  let slides = document.getElementsByClassName("slide-red");
  let images = document.getElementsByClassName("red-project-image");
  if (n > slides.length) {
    slideIndexRed = 1
  }
  if (n < 1) {
    slideIndexRed = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    images[i].style.display = "none";
  }

  slides[slideIndexRed-1].style.display = "block";
  images[slideIndexRed-1].style.display = "block";
}
