const burger = document.querySelector(".fa-bars");
const sidelinks = document.querySelector(".sidelinks");
burger.addEventListener("click", toggleSideBar);
function toggleSideBar() {
  sidelinks.classList.toggle("new");
}
// TESTIMONIALS
const allCards = document.querySelectorAll(".testimonials-container-content");
const cardsLength = document.querySelectorAll(".allCards").length;
let translate = 0;
let currentIndex = 0;
const showNext = () => {
  if (currentIndex >= cardsLength - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
    translate -= 250;
    console.log(currentIndex);
  }
  updater();
};
function updater() {
  allCards.forEach((card) => {
    card.style.transform = `translate(${translate}px)`;
  });
}
const showPrevious = () => {
  if (currentIndex === cardsLength - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
    translate += 250;

    console.log(currentIndex);
  }
  updater();
};

// TYPING EFFECT
const typingDiv = document.querySelector(".typing");
const hobies = ["Study", "Explore"];

let charIndex = 0;
let stringIndex = 0;
let typingText = "";

function type() {
  if (charIndex === hobies[stringIndex].length) {
    setTimeout(erase, 100);
  } else {
    typingText += hobies[stringIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 600);
    typingDiv.textContent = typingText;
    console.log(typingText);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText = hobies[stringIndex].slice(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100);
    typingDiv.textContent = typingText;
    console.log(typingText);
  } else {
    stringIndex++;
    if (stringIndex >= hobies.length) stringIndex = 0;

    setTimeout(type, 600);
  }
}

erase();
type();
// SLIDER TEST

const slides = document.querySelector(".slider").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const indicator = document.querySelector(".indicator");
let index = 0;

prev.addEventListener("click", function () {
  prevSlide();
  updateCircleIndicator();
  resetTimer();
});

next.addEventListener("click", function () {
  nextSlide();
  updateCircleIndicator();
  resetTimer();
});

// create circle indicators
function circleIndicator() {
  for (let i = 0; i < slides.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = i + 1;
    div.setAttribute("onclick", "indicateSlide(this)");
    div.id = i;
    if (i == 0) {
      div.className = "active";
    }
    indicator.appendChild(div);
  }
}
circleIndicator();

function indicateSlide(element) {
  index = element.id;
  changeSlide();
  updateCircleIndicator();
  resetTimer();
}

function updateCircleIndicator() {
  for (let i = 0; i < indicator.children.length; i++) {
    indicator.children[i].classList.remove("active");
  }
  indicator.children[index].classList.add("active");
}

function prevSlide() {
  if (index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  changeSlide();
}

function nextSlide() {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeSlide();
}

function changeSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  slides[index].classList.add("active");
}

function resetTimer() {
  // when click to indicator or controls button
  // stop timer
  clearInterval(timer);
  // then started again timer
  timer = setInterval(autoPlay, 4000);
}

function autoPlay() {
  nextSlide();
  updateCircleIndicator();
}

let timer = setInterval(autoPlay, 4000);
