// Navbar Menu //

const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// Hero Slider //

(function () {
  const images = document.querySelectorAll(".hero__bg-img");
  const titleEl = document.querySelector(".hero__title");
  let current = 0;

  function showNext() {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");

    // title fade out -> text change -> fade in
    titleEl.style.opacity = 0;
    setTimeout(() => {
      titleEl.textContent = images[current].dataset.title;
      titleEl.style.opacity = 1;
    }, 400);
  }

  setInterval(showNext, 2000);
})();

// Review Slider //

const reviews = [
  { name: "- Micky Mouse", avatar: "assets/review/mariaimg.png" },
  { name: "- Tom Mouse", avatar: "assets/review/mariaimg.png" },
  { name: "- Jerry Mouse", avatar: "assets/review/mariaimg.png" },
];

let currentReview = 0;
let reviewTimer;

function goToReview(index) {
  currentReview = index;

  const text = document.querySelector(".review__text");
  const name = document.getElementById("reviewName");
  const avatar = document.querySelector(".review__avatar-wrap");

  [text, name, avatar].forEach((el) => el.classList.add("review__slide-out"));

  setTimeout(() => {
    name.textContent = reviews[index].name;
    document.querySelector(".review__avatar").src = reviews[index].avatar;

    [text, name, avatar].forEach((el) => {
      el.classList.remove("review__slide-out");
      el.classList.add("review__slide-in");
    });

    setTimeout(() => {
      [text, name, avatar].forEach((el) =>
        el.classList.remove("review__slide-in"),
      );
    }, 50);
  }, 300);

  document.querySelectorAll(".review__dots .dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  clearInterval(reviewTimer);
  startReviewTimer();
}

function startReviewTimer() {
  reviewTimer = setInterval(() => {
    const next = (currentReview + 1) % reviews.length;
    goToReview(next);
  }, 2000);
}

startReviewTimer();

// TOP SCROLL ARROW //

window.addEventListener("scroll", () => {
  const btn = document.getElementById("scrollToTop");
  if (window.scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.querySelectorAll('*').forEach(el => {
  if (el.offsetWidth > document.documentElement.clientWidth) {
    console.log(el, el.offsetWidth, 'vs viewport', document.documentElement.clientWidth);
  }
});