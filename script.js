// ===== Dark / Light Mode Toggle =====
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click',()=>{
  document.body.classList.toggle('light-mode');
});

// ===== Typing Animation =====
const typingText = document.getElementById('typing-text');
const words = ["Data Scientist", "ML Engineer", "Full Stack Developer"];
let i=0, j=0, currentWord='', isDeleting=false;
function type(){
  if(i>=words.length) i=0;
  currentWord=words[i];
  typingText.textContent=currentWord.substring(0,j);
  if(!isDeleting) j++;
  else j--;
  if(j===currentWord.length+1 && !isDeleting){isDeleting=true;}
  else if(j===0 && isDeleting){isDeleting=false;i++;}
  setTimeout(type,isDeleting?50:150);
}
type();

// ===== Smooth Scroll & Fade-in =====
const sections = document.querySelectorAll('section');
function checkSections(){
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section=>{
    const top = section.getBoundingClientRect().top;
    if(top<triggerBottom) section.style.opacity='1', section.style.transform='translateY(0)';
  });
}
window.addEventListener('scroll',checkSections);
window.addEventListener('load',checkSections);

// ===== Skill Bar Animation =====
const skillBars = document.querySelectorAll('.skill-progress');
skillBars.forEach(bar=>{
  let width=0;
  const target = bar.dataset.progress;
  const interval = setInterval(()=>{
    if(width>=target) clearInterval(interval);
    else {width++; bar.style.width=width+'%';}
  },20);
});

// ===== Back To Top =====
const backBtn = document.getElementById('backToTop');
backBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
window.addEventListener('scroll',()=>{backBtn.style.display=(window.scrollY>300)?'block':'none';});
