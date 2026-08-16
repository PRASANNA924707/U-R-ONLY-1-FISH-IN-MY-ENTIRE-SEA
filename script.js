// -------------------------
// START BUTTON
// -------------------------

const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const mainPage = document.getElementById("mainPage");

startBtn.addEventListener("click", () => {

  startScreen.style.opacity = "0";
  startScreen.style.transform = "scale(0.95)";
  startScreen.style.transition = "all 0.7s ease";

  setTimeout(() => {

    startScreen.style.display = "none";

    mainPage.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }, 700);

});


// -------------------------
// HEART BUTTON
// -------------------------

const heartBtn = document.getElementById("heartBtn");
const heartMessage = document.getElementById("heartMessage");

heartBtn.addEventListener("click", () => {

  heartMessage.classList.remove("hidden");

  heartBtn.innerHTML = "♡ forever ♡";

  createHearts();

});


// -------------------------
// FLOATING HEARTS
// -------------------------

function createHearts() {

  for (let i = 0; i < 12; i++) {

    const heart = document.createElement("div");

    heart.innerHTML = ["♡", "♥", "🌻", "🐾"][Math.floor(Math.random() * 4)];

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "20px";

    heart.style.fontSize =
      (15 + Math.random() * 20) + "px";

    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";

    heart.style.transition =
      "transform 3s ease, opacity 3s ease";

    document.body.appendChild(heart);

    setTimeout(() => {

      heart.style.transform =
        `translateY(-${300 + Math.random() * 300}px) rotate(${Math.random() * 90 - 45}deg)`;

      heart.style.opacity = "0";

    }, 50);

    setTimeout(() => {
      heart.remove();
    }, 3200);

  }

}


// -------------------------
// SMALL SCROLL REVEAL
// -------------------------

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

      }

    });

  },
  {
    threshold: 0.15
  }
);


cards.forEach((card) => {

  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.7s ease, transform 0.7s ease";

  observer.observe(card);

});


// -------------------------
// CONSOLE MESSAGE 😭
// -------------------------

console.log(
  "Made with lots of love, cats and sunflowers 🌻🐱♡"
);
