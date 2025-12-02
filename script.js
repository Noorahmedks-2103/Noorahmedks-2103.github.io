/* ========== TYPING EFFECT ========== */
const roles = [
  "Machine Learning Engineer",
  "Data Scientist",
  "Python Developer",
  "AI & Automation Enthusiast",
  "Data Analyst",
  "Business Analyst"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById("typing");

function type() {
  if (!typingEl) return;

  const current = roles[roleIndex];
  let displayed = current.substring(0, charIndex);

  typingEl.textContent = displayed;

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 40);
  } else {
    if (!isDeleting && charIndex === current.length) {
      isDeleting = true;
      setTimeout(type, 1200);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 200);
    }
  }
}
type();

/* ========== DARK MODE TOGGLE ========== */
const darkToggle = document.getElementById("darkModeToggle");

function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light-mode");
    darkToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("light-mode");
    darkToggle.textContent = "🌙";
  }
}

const savedTheme = localStorage.getItem("theme") || "dark";
applyTheme(savedTheme);

darkToggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-mode");
  const theme = isLight ? "light" : "dark";
  localStorage.setItem("theme", theme);
  applyTheme(theme);
});

/* ========== VISITOR COUNTER ========== */
const visitorSpan = document.getElementById("visitor-count");
if (visitorSpan) {
  fetch("https://api.countapi.xyz/hit/noor-portfolio-unique-key/visits")
    .then((res) => res.json())
    .then((data) => {
      visitorSpan.textContent = String(data.value).padStart(4, "0");
    })
    .catch(() => {
      visitorSpan.textContent = "0001";
    });
}

/* ========== SCROLL REVEAL (BLUR + SLIDE) ========== */
const revealEls = document.querySelectorAll(
  ".section, .project-card, .skill-item, .blog-card, .timeline-item, .achievements-list li, .contact-grid a"
);

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 80) {
      el.classList.add("reveal");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ========== RESUME MODAL ========== */
const resumeModal = document.getElementById("resumeModal");
const resumeBtn = document.getElementById("resumeModalBtn");
const closeBtn = resumeModal?.querySelector(".close");

if (resumeBtn && resumeModal && closeBtn) {
  resumeBtn.addEventListener("click", () => {
    resumeModal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    resumeModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === resumeModal) {
      resumeModal.style.display = "none";
    }
  });
}
