// ===== Dark / Light Mode Toggle =====
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  toggleBtn.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀';
});

// ===== Typing Text Animation =====
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

// ===== Typing Text Color Animation =====
let colorIndex = 0;
const colors = ['#00ffff','#6efff7','#ff6ec7','#ffd93d'];
setInterval(() => {
  typingText.style.color = colors[colorIndex % colors.length];
  colorIndex++;
}, 1000);

// ===== Smooth Scroll =====
document.querySelectorAll('.top-nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ===== Fade-In Sections on Scroll =====
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

// ===== Back to Top Button =====
const backToTop = document.getElementById('backToTop');
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTop.style.display = "block";
  } else { backToTop.style.display = "none"; }
};
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== Active Section Highlight =====
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

// ===== Animate Skill Bars with Percentages =====
const skillBars = document.querySelectorAll('.skill-progress');
skillBars.forEach(bar => {
  const percentSpan = document.createElement('span');
  percentSpan.classList.add('percentage');
  percentSpan.textContent = '0%';
  bar.parentElement.appendChild(percentSpan);

  const animateSkill = () => {
    let width = 0;
    const target = parseInt(bar.getAttribute('data-progress'));
    const interval = setInterval(() => {
      if (width >= target) { clearInterval(interval); }
      else { width++; bar.style.width = width + '%'; percentSpan.textContent = width + '%'; }
    }, 15);
  };

  const skillBarObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { animateSkill(); skillBarObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.5 });
  skillBarObserver.observe(bar);
});

// ===== Floating Animation for Project Cards =====
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  const floatAnim = () => {
    let pos = 0, dir = 1;
    setInterval(() => {
      pos += dir * 0.3;
      if (pos > 5 || pos < -5) dir *= -1;
      card.style.transform = `translateY(${pos}px)`;
    }, 30);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        floatAnim();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  observer.observe(card);
});

// ===== Smooth Fade for Floating Buttons =====
const floatingButtons = document.querySelector('.floating-buttons');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    floatingButtons.style.opacity = 1;
    floatingButtons.style.transition = 'opacity 0.5s ease';
  } else {
    floatingButtons.style.opacity = 0;
    floatingButtons.style.transition = 'opacity 0.5s ease';
  }
});

// ===== Scroll-Triggered Glow for Section Headings =====
const sectionHeadings = document.querySelectorAll('section h2');

const headingGlowObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.textShadow = '0 0 15px rgba(255,110,199,0.8), 0 0 25px rgba(255,217,61,0.6), 0 0 35px rgba(110,255,247,0.5)';
      entry.target.style.transition = 'text-shadow 1s ease-in-out';
    } else {
      entry.target.style.textShadow = '0 0 5px rgba(255,255,255,0.4), 0 0 10px rgba(0,255,255,0.2)';
    }
  });
}, { threshold: 0.3 });

sectionHeadings.forEach(heading => headingGlowObserver.observe(heading));
