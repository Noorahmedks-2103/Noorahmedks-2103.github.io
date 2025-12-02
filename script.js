/* ========== TYPING EFFECT ========== */
const roles = [
  "Machine Learning Engineer",
  "Data Scientist",
  "Python Developer",
  "AI & Automation Enthusiast",
  "Data Analyst",
  "Business Analyst"
];

let i = 0, j = 0, currentText = "", isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (!typingElement) return;

  currentText = roles[i];
  typingElement.innerHTML = currentText.substring(0, j);

  if (!isDeleting && j < currentText.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  }

  if (j === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}
typeEffect();


/* ========== DARK MODE TOGGLE ========== */
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  const isLight = document.body.classList.contains("light-mode");
  toggleBtn.textContent = isLight ? "☀️" : "🌙";

  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// Load saved preference
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  toggleBtn.textContent = "☀️";
}


/* ========== VISITOR COUNTER ========== */
const visitorCount = document.getElementById("visitor-count");
fetch("https://api.countapi.xyz/hit/noor-portfolio/visits")
  .then(res => res.json())
  .then(data => {
    visitorCount.textContent = data.value.toString().padStart(4, "0");
  });


/* ========== SCROLL REVEAL ANIMATION ========== */
const revealElements = document.querySelectorAll(".section, .project-card, .skill-item");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 80) {
      el.classList.add("reveal");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/* ========== BACK TO TOP BUTTON ========== */
const backToTopBtn = document.createElement("button");
backToTopBtn.innerHTML = "<i class='fas fa-arrow-up'></i>";
backToTopBtn.id = "backToTop";
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
