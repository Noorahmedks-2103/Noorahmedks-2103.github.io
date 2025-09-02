// ===== Smooth scroll for internal links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ===== Fade-in sections on scroll =====
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transition = 'all 1s ease';
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// ===== Back to Top button =====
const backToTop = document.getElementById('backToTop');

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Optional: Floating particles in hero (enhanced design) =====
const hero = document.querySelector('.hero');
for(let i = 0; i < 25; i++){
  const particle = document.createElement('span');
  particle.style.left = Math.random() * 100 + '%';
  particle.style.width = particle.style.height = Math.random() * 12 + 5 + 'px';
  particle.style.background = 'rgba(255,255,255,' + Math.random() + ')';
  particle.style.position = 'absolute';
  particle.style.bottom = '-20px';
  particle.style.borderRadius = '50%';
  particle.style.animation = `float ${5 + Math.random() * 10}s linear infinite`;
  hero.appendChild(particle);
}
