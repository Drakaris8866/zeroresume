const images = document.querySelectorAll(".slider .slider__line img");
const sliderLine = document.querySelector(".slider__line");
let count = 0;
let width;

function init() {
  width = document.querySelector(".slider").offsetWidth;
  sliderLine.style.width = width * images.length + "px";
  images.forEach((img) => {
    img.style.width = width + "px";
    img.style.height = "auto";
  });
  roll();
}

init();
window.addEventListener("resize", init);

document
  .querySelector(".controll-slider__next")
  .addEventListener("click", function () {
    count++;
    roll();
  });

document
  .querySelector(".controll-slider__prev")
  .addEventListener("click", function () {
    count--;
    roll();
  });


function roll() {
  sliderLine.style.transform = "translate(-" + count * width + "px)";
  if (count > 0 && count !== images.length - 1) {
    document
      .querySelector(".controll-slider__prev")
      .classList.remove("disable");
    document
      .querySelector(".controll-slider__next")
      .classList.remove("disable");
  } else if (count === 0) {
    document.querySelector(".controll-slider__prev").classList.add("disable");
  } else {
    document.querySelector(".controll-slider__next").classList.add("disable");
  }
}

const hamb = document.querySelector("#hamb")
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1)

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};