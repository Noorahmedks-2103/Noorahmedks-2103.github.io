---

## *3️⃣ script.js*

```javascript
// ===== Smooth Scroll for Nav =====
document.querySelectorAll('.top-nav a').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// ===== Fade-in Sections on Scroll =====
const sections=document.querySelectorAll('section');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity=1;
      entry.target.style.transform='translateY(0)';
    }
  });
},{threshold:0.1});
sections.forEach(section=>observer.observe(section));

// ===== Counters =====
const counters=document.querySelectorAll('.count');
counters.forEach(counter=>{
  const updateCount=()=>{
    const target=+counter.getAttribute('data-target');
    const count=+counter.innerText;
    const inc=target/100;
    if(count<target){
      counter.innerText=Math.ceil(count+inc);
      setTimeout(updateCount,20);
    } else { counter.innerText=target; }
  };
  updateCount();
});

// ===== Typing Text =====
const typingText=document.getElementById('typing-text');
const words=["Aspiring Data Scientist","ML Engineer","Full Stack Developer"];
let i=0, j=0, currentWord="", isDeleting=false;
function type(){
  if(i>=words.length) i=0;
  currentWord=words[i];
  if(isDeleting){
    typingText.innerText=currentWord.substring(0,j--);
    if(j<0){ isDeleting=false; i++; setTimeout(type,200); return; }
  } else {
    typingText.innerText=currentWord.substring(0,j++);
    if(j>currentWord.length){ isDeleting=true; setTimeout(type,1000); return; }
  }
  setTimeout(type,100);
}
type();

// ===== Dark/Light Mode Toggle =====
const toggle=document.getElementById('darkModeToggle');
toggle.addEventListener('click',()=>{
  document.body.classList.toggle('light-mode');
});
