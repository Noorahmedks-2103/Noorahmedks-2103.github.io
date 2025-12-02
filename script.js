/* Typing Animation */
const roles = [
  "Machine Learning Engineer",
  "Data Scientist",
  "Data Analyst",
  "Business Analyst",
  "Python Developer",
  "AI & Automation Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
const typingElement = document.getElementById("typing-text");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    currentRole += roles[roleIndex].charAt(charIndex);
    typingElement.innerHTML = currentRole;
    charIndex++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(removeEffect, 1200);
  }
}

function removeEffect() {
  if (charIndex > 0) {
    currentRole = currentRole.slice(0, -1);
    typingElement.innerHTML = currentRole;
    charIndex--;
    setTimeout(removeEffect, 40);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 200);
  }
}

typeEffect();

/* VISITOR COUNTER */
fetch("https://api.countapi.xyz/hit/noorportfolio/visits")
  .then(res => res.json())
  .then(data => {
    document.getElementById("visitCount").innerText = data.value;
  });

/* SKILL BAR ANIMATION ON SCROLL */
const bars = document.querySelectorAll(".skill-progress");
window.addEventListener("scroll", () => {
  bars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      bar.style.width = bar.getAttribute("data-progress") + "%";
    }
  });
});
