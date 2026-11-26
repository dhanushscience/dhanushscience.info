(()=>{
const d=document,root=d.documentElement,$=s=>d.querySelector(s),$$=s=>[...d.querySelectorAll(s)];
root.classList.add('js');

// white is the default; dark is the alternate
$('.theme').onclick=()=>{const n=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=n;try{localStorage.setItem('theme',n)}catch(e){}};

// scroll progress + active nav link (only links that point at a section on this page)
const nav=$('.rail-nav');
const links=$$('.rail-nav a').filter(a=>a.hash&&a.pathname===location.pathname);
const secs=links.map(a=>d.getElementById(a.hash.slice(1))).filter(Boolean);
let last;
const onScroll=()=>{
  const m=root.scrollHeight-innerHeight;
  root.style.setProperty('--p',m>0?Math.min(1,scrollY/m):0);
  if(!secs.length)return;
  // no section active until one reaches the reading line (the hero has no nav entry)
  let cur=null;secs.forEach(s=>{if(s.getBoundingClientRect().top<innerHeight*.4)cur=s});
  if(cur===last)return;last=cur;
  links.forEach(a=>{const on=!!cur&&a.hash==='#'+cur.id;a.classList.toggle('active',on);on?a.setAttribute('aria-current','true'):a.removeAttribute('aria-current');
    if(on&&nav.scrollWidth>nav.clientWidth)nav.scrollTo({left:a.offsetLeft-nav.clientWidth/2+a.clientWidth/2,behavior:'smooth'})});
};
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);onScroll();
})();
