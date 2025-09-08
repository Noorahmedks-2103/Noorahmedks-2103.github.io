// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// ===== Fade-in Sections =====
const sections=document.querySelectorAll('section');
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity=1;
      entry.target.style.transform='translateY(0)';
    }
  });
},{threshold:0.1});
sections.forEach(section=>observer.observe(section));

// ===== Back to Top =====
const backToTop=document.getElementById('backToTop');
window.onscroll=()=>{if(window.scrollY>300){backToTop.style.display='flex';}else{backToTop.style.display='none';}};
backToTop.addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'});});

// ===== Typing Effect =====
const texts=["Aspiring Data Scientist","ML Engineer","Web / Full Stack Developer"];
let count=0,index=0,currentText='',letter='';
(function type(){
  if(count===texts.length) count=0;
  currentText=texts[count];
  letter=currentText.slice(0,++index);
  document.getElementById('typing-text').textContent=letter;
  if(letter.length===currentText.length){
    setTimeout(()=>{index=0;count++;type();},1500);
  }else{setTimeout(type,150);}
})();

// ===== Top Nav Highlight =====
const navLinks=document.querySelectorAll('.top-nav a');
function highlightNav(){
  let scrollPos=window.scrollY+window.innerHeight/3;
  sections.forEach((section,index)=>{
    if(scrollPos>=section.offsetTop && scrollPos<section.offsetTop+section.offsetHeight){
      navLinks.forEach(link=>link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  });
}
window.addEventListener('scroll',highlightNav);
highlightNav();

// ===== Hero Particles =====
const hero=document.querySelector('.hero');
for(let i=0;i<25;i++){
  const p=document.createElement('span');
  p.classList.add('particle');
  p.style.left=Math.random()*100+'%';
  p.style.width=p.style.height=Math.random()*12+5+'px';
  p.style.background=`rgba(255,255,255,${Math.random()})`;
  p.style.bottom='-20px';
  p.style.animation=`float ${5+Math.random()*10}s linear infinite`;
  hero.appendChild(p);
}

// ===== Dark Mode Toggle =====
const darkModeToggle=document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click',()=>{document.body.classList.toggle('dark-mode');});
