const carouselImg = Array.from(document.querySelector(".carousel").children);
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

let activeImgIndex = carouselImg.indexOf(
  document.querySelector(".carousel-img--active")
);

arrowLeft.addEventListener("mouseover", () => fadeInPreview("left"));
arrowRight.addEventListener("mouseover", () => fadeInPreview("right"));

function fadeInPreview(direction) {
  if (direction === "left") {
    carouselImg[checkEndOrBegin(activeImgIndex - 1)].style.width = "100px";
    carouselImg[checkEndOrBegin(activeImgIndex - 1)].style.zIndex = 2;
    carouselImg[checkEndOrBegin(activeImgIndex - 1)].className =
      "carousel-img carousel-img-previous";
  } else {
    carouselImg[checkEndOrBegin(activeImgIndex + 1)].style.width = "100px";
    carouselImg[checkEndOrBegin(activeImgIndex + 1)].style.zIndex = 2;
    carouselImg[checkEndOrBegin(activeImgIndex + 1)].className =
      "carousel-img carousel-img-next";
  }
}

arrowLeft.addEventListener("mouseleave", () => fadeOutPreview("left"));
arrowRight.addEventListener("mouseleave", () => fadeOutPreview("right"));

function fadeOutPreview(direction) {
  if (direction === "left") {
    carouselImg[checkEndOrBegin(activeImgIndex - 1)].style.width = "0";
    carouselImg[checkEndOrBegin(activeImgIndex - 1)].style.zIndex = "";
  } else {
    carouselImg[checkEndOrBegin(activeImgIndex + 1)].style.width = "0";
    carouselImg[checkEndOrBegin(activeImgIndex + 1)].style.zIndex = "";
  }
}

arrowLeft.addEventListener("click", () => changeActiveImgLeft());
arrowRight.addEventListener("click", () => changeActiveImgRight());

function changeActiveImgLeft(direction) {
  arrowLeft.removeEventListener("mouseover", () => {});
  arrowRight.removeEventListener("mouseover", () => {});
  arrowLeft.removeEventListener("mouseleave", () => {});
  arrowRight.removeEventListener("mouseleave", () => {});

  carouselImg[checkEndOrBegin(activeImgIndex - 1)].classList.add(
    "carousel-img--fade-in-left"
  );

  carouselImg[checkEndOrBegin(activeImgIndex - 1)].classList.remove(
    "carousel-img-previous"
  );

  carouselImg[checkEndOrBegin(activeImgIndex)].classList.replace(
    "carousel-img--active",
    "carousel-img--fade-out-right"
  );

  setTimeout(() => {
    carouselImg[checkEndOrBegin(activeImgIndex - 1)].classList.replace(
      "carousel-img--fade-in-left",
      "carousel-img--active"
    );
    carouselImg[checkEndOrBegin(activeImgIndex)].classList.remove(
      "carousel-img--fade-out-right"
    );

    activeImgIndex = carouselImg.indexOf(
      document.querySelector(".carousel-img--active")
    );
  }, 1700);

  //   setTimeout(() => {
  //     arrowLeft.addEventListener("mouseover", () => fadeInPreview("left"));
  //     arrowRight.addEventListener("mouseover", () => fadeInPreview("right"));
  //     arrowLeft.addEventListener("mouseleave", () => fadeOutPreview("left"));
  //     arrowRight.addEventListener("mouseleave", () => fadeOutPreview("right"));
  //   }, 2000);
}

function changeActiveImgRight(direction) {
  arrowLeft.removeEventListener("mouseover", () => {});
  arrowRight.removeEventListener("mouseover", () => {});
  arrowLeft.removeEventListener("mouseleave", () => {});
  arrowRight.removeEventListener("mouseleave", () => {});

  carouselImg[checkEndOrBegin(activeImgIndex + 1)].classList.add(
    "carousel-img--fade-in-right"
  );
  carouselImg[checkEndOrBegin(activeImgIndex + 1)].classList.remove(
    "carousel-img-next"
  );

  carouselImg[checkEndOrBegin(activeImgIndex)].classList.replace(
    "carousel-img--active",
    "carousel-img--fade-out-left"
  );

  setTimeout(() => {
    carouselImg[checkEndOrBegin(activeImgIndex + 1)].classList.replace(
      "carousel-img--fade-in-right",
      "carousel-img--active"
    );
    carouselImg[checkEndOrBegin(activeImgIndex)].classList.remove(
      "carousel-img--fade-out-left"
    );

    activeImgIndex = carouselImg.indexOf(
      document.querySelector(".carousel-img--active")
    );
  }, 1700);

  //   setTimeout(() => {
  //     arrowLeft.addEventListener("mouseover", () => fadeInPreview("left"));
  //     arrowRight.addEventListener("mouseover", () => fadeInPreview("right"));
  //     arrowLeft.addEventListener("mouseleave", () => fadeOutPreview("left"));
  //     arrowRight.addEventListener("mouseleave", () => fadeOutPreview("right"));
  //   }, 2000);
}

function checkEndOrBegin(index) {
  if (index > carouselImg.length) {
    return 0;
  } else if (index < 0) {
    return carouselImg.length - 1;
  } else {
    return index;
  }
}
