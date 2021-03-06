// CAROUSEL //

const carouselImg = Array.from(document.querySelector(".carousel").children);
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

let activeImgIndex = carouselImg.indexOf(
  document.querySelector(".carousel-img--active")
);

arrowLeft.onmouseover = () => fadeInPreview("left");
arrowRight.onmouseover = () => fadeInPreview("right");

function fadeInPreview(direction) {
  if (direction === "left") {
    carouselImg[checkEndOrBegin(activeImgIndex - 1)].style.width = "100px";
    carouselImg[checkEndOrBegin(activeImgIndex - 1)].className =
      "carousel-img carousel-img-previous";
  } else {
    carouselImg[checkEndOrBegin(activeImgIndex + 1)].style.width = "100px";
    carouselImg[checkEndOrBegin(activeImgIndex + 1)].className =
      "carousel-img carousel-img-next";
  }
}

arrowLeft.onmouseleave = () => fadeOutPreview("left");
arrowRight.onmouseleave = () => fadeOutPreview("right");

function fadeOutPreview(direction) {
  console.log("test");

  if (direction === "left") {
    carouselImg[checkEndOrBegin(activeImgIndex - 1)].style.width = "0";
  } else {
    carouselImg[checkEndOrBegin(activeImgIndex + 1)].style.width = "0";
  }
}

arrowLeft.onclick = changeActiveImgLeft;
arrowRight.onclick = changeActiveImgRight;

function changeActiveImgLeft(direction) {
  arrowLeft.onclick = "";
  arrowRight.onclick = "";
  arrowLeft.onmouseleave = "";
  arrowRight.onmouseleave = "";
  arrowLeft.onmouseover = "";
  arrowRight.onmouseover = "";

  carouselImg[checkEndOrBegin(activeImgIndex - 1)].classList.add(
    "carousel-img--fade-in-left"
  );

  carouselImg[checkEndOrBegin(activeImgIndex)].classList.replace(
    "carousel-img--active",
    "carousel-img--fade-out-right"
  );

  setTimeout(() => {
    carouselImg[checkEndOrBegin(activeImgIndex - 1)].classList.remove(
      "carousel-img-previous"
    );
    carouselImg[checkEndOrBegin(activeImgIndex - 1)].classList.replace(
      "carousel-img--fade-in-left",
      "carousel-img--active"
    );
    carouselImg[checkEndOrBegin(activeImgIndex - 1)].style.width = "0";

    carouselImg[checkEndOrBegin(activeImgIndex)].classList.remove(
      "carousel-img--fade-out-right"
    );

    activeImgIndex = carouselImg.indexOf(
      document.querySelector(".carousel-img--active")
    );

    arrowLeft.onclick = changeActiveImgLeft;
    arrowRight.onclick = changeActiveImgRight;
    arrowLeft.onmouseleave = () => fadeOutPreview("left");
    arrowRight.onmouseleave = () => fadeOutPreview("right");
    arrowLeft.onmouseover = () => fadeInPreview("left");
    arrowRight.onmouseover = () => fadeInPreview("right");
  }, 1200);
}

function changeActiveImgRight(direction) {
  arrowLeft.onclick = "";
  arrowRight.onclick = "";
  arrowLeft.onmouseleave = "";
  arrowRight.onmouseleave = "";
  arrowLeft.onmouseover = "";
  arrowRight.onmouseover = "";

  carouselImg[checkEndOrBegin(activeImgIndex + 1)].classList.add(
    "carousel-img--fade-in-right"
  );

  carouselImg[checkEndOrBegin(activeImgIndex)].classList.replace(
    "carousel-img--active",
    "carousel-img--fade-out-left"
  );

  setTimeout(() => {
    carouselImg[checkEndOrBegin(activeImgIndex + 1)].classList.remove(
      "carousel-img-next"
    );
    carouselImg[checkEndOrBegin(activeImgIndex + 1)].classList.replace(
      "carousel-img--fade-in-right",
      "carousel-img--active"
    );
    carouselImg[checkEndOrBegin(activeImgIndex + 1)].style.width = "0";

    carouselImg[checkEndOrBegin(activeImgIndex)].classList.remove(
      "carousel-img--fade-out-left"
    );

    activeImgIndex = carouselImg.indexOf(
      document.querySelector(".carousel-img--active")
    );

    arrowLeft.onclick = changeActiveImgLeft;
    arrowRight.onclick = changeActiveImgRight;
    arrowLeft.onmouseleave = () => fadeOutPreview("left");
    arrowRight.onmouseleave = () => fadeOutPreview("right");
    arrowLeft.onmouseover = () => fadeInPreview("left");
    arrowRight.onmouseover = () => fadeInPreview("right");
  }, 1200);
}

function checkEndOrBegin(index) {
  if (index >= carouselImg.length) {
    return 0;
  } else if (index < 0) {
    return carouselImg.length - 1;
  } else {
    return index;
  }
}

// CAROUSEL //

// NAVBAR //
const navButtonOpen = document.querySelector(".nav-btn-open");
const navButtonClose = document.querySelector(".nav-btn-close");
const nav = document.querySelector(".nav");

navButtonOpen.onclick = toggleNav;
navButtonClose.onclick = toggleNav;

function toggleNav() {
  navButtonOpen.classList.toggle("hidden");
  navButtonClose.classList.toggle("hidden");

  nav.classList.toggle("nav--opened");
  nav.classList.toggle("nav--closed");
}

// NAVBAR //
