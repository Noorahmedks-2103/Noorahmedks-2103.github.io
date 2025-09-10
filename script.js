// Dark/Light Mode
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click',()=>{
  document.body.classList.toggle('light-mode');
});

// Typing Effect
const text = "Data Scientist | ML Engineer | Web Developer";
let index = 0;
function typeText(){
  const typingElement = document.getElementById('typing-text');
  typingElement.innerText = text.slice(0,index);
  index++;
  if(index>text.length) index=0;
}
setInterval(typeText,150);

// Smooth Scroll & Fade-in Sections
const sections = document.querySelectorAll('section');
const options = {threshold:0.2};
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
},options);
sections.forEach(section=>observer.observe(section));

// Skill Bars Animation
const skillBars = document.querySelectorAll('.skill-progress');
window.addEventListener('scroll',()=>{
  skillBars.forEach(bar=>{
    const value = bar.getAttribute('data-progress');
    const barPos = bar.getBoundingClientRect().top;
    const screenPos = window.innerHeight/1.2;
    if(barPos < screenPos){
      bar.style.width = value + '%';
    }
  });
});

// Back to Top Button
const backBtn = document.getElementById('backToTop');
backBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
window.addEventListener('scroll',()=>{
  if(window.scrollY>500) backBtn.style.display='block';
  else backBtn.style.display='none';
});
