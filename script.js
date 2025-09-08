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

// ===== Project Filter =====
const filterBtns = document.querySelectorAll('#projects .filters button');
const projects = document.querySelectorAll('#projects .project');
filterBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const filter = btn.dataset.filter;
    projects.forEach(p=>{
      if(filter==='all'||p.dataset.category===filter) p.style.display='block';
      else p.style.display='none';
    });
  });
});

// ===== Dark Mode Toggle =====
const darkToggle = document.getElementById('darkModeToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ===== Typing Effect =====
const typingText = document.getElementById('typing-text');
const phrases = ['Aspiring Data Scientist', 'ML Engineer', 'Full Stack Developer', 'Data Analyst'];
let i = 0, j = 0, currentText = '', isDeleting = false;

function type() {
  if(!isDeleting && j <= phrases[i].length){
    currentText = phrases[i].substring(0, j);
    j++;
  } else if(isDeleting && j >= 0){
    currentText = phrases[i].substring(0, j);
    j--;
  }

  typingText.textContent = currentText;

  if(j === phrases[i].length){ isDeleting = true; }
  if(isDeleting && j===0){ isDeleting=false; i=(i+1)%phrases.length; }

  setTimeout(type, isDeleting ? 60 : 120);
}
type();

// ===== Floating & Interactive Particles =====
const hero = document.querySelector('.hero');
const numParticles = 25;
const particles = [];

for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement('span');
  particle.classList.add('particle');
  const size = Math.random() * 8 + 4;
  particle.style.width = particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.background = `rgba(255,255,255,${Math.random() * 0.6 + 0.3})`;
  hero.appendChild(particle);
  particles.push({el: particle, x: Math.random()*window.innerWidth, y: Math.random()*window.innerHeight, size});
}

// Mouse & Touch interaction
let mouse = {x:null, y:null};
hero.addEventListener('mousemove', e => { mouse.x=e.clientX; mouse.y=e.clientY; });
hero.addEventListener('touchmove', e => { const touch=e.touches[0]; mouse.x=touch.clientX; mouse.y=touch.clientY; });
hero.addEventListener('touchend', ()=>{ mouse.x=null; mouse.y=null; });

function animateParticles(){
  particles.forEach(p=>{
    p.y -= 0.5;
    if(p.y < -50) p.y = hero.offsetHeight + 50;

    if(mouse.x && mouse.y){
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx*dx+dy*dy);
      if(dist<100){ p.x += dx/dist*1.5; p.y += dy/dist*1.5; }
    }

    p.el.style.transform = `translate(${p.x}px, ${p.y}px)`;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();
