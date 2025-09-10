// Dark / Light Mode Toggle
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  toggleBtn.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀';
});

// Typing Text Animation
const typingText = document.getElementById('typing-text');
const messages = ["Aspiring Data Scientist", "ML Engineer", "Full Stack Developer", "Data Analyst"];
let msgIndex = 0, charIndex = 0;
(function type() {
  if (charIndex < messages[msgIndex].length) {
    typingText.textContent += messages[msgIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(() => {
      typingText.textContent = "";
      charIndex = 0;
      msgIndex = (msgIndex + 1) % messages.length;
      type();
    }, 1000);
  }
})();

// Smooth Scroll
document.querySelectorAll('.top-nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Fade-In Sections on Scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });
sections.forEach(section => observer.observe(section));

// Back to Top
const backToTop = document.getElementById('backToTop');
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTop.style.display = "block";
  } else { backToTop.style.display = "none"; }
};
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Active Section Highlight
const navLinks = document.querySelectorAll('.top-nav a');
const allSections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let current = '';
  allSections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    if (pageYOffset >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') == '#' + current) link.classList.add('active');
  });
});

// Animate Skill Bars
const skillBars = document.querySelectorAll('.skill-progress');
skillBars.forEach(bar => {
  const percentSpan = document.createElement('span');
  percentSpan.classList.add('percentage');
  percentSpan.textContent = '0%';
  bar.parentElement.appendChild(percentSpan);

  const animateSkill = () => {
    let width =
