(()=>{
const d=document,root=d.documentElement,$=s=>d.querySelector(s),$$=s=>[...d.querySelectorAll(s)];
root.classList.add('js');

$('.theme').onclick=()=>{const n=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=n;try{localStorage.setItem('theme',n)}catch(e){}};

// scroll progress + active nav link (only links that point at a section on this page)
const nav=$('.rail-nav');
const links=$$('.rail-nav a').filter(a=>a.hash&&a.pathname===location.pathname);
const secs=links.map(a=>d.getElementById(a.hash.slice(1))).filter(Boolean);
let last=null;
// slide the marker and the focused ruler ticks to the active label
const rail=$('.rail'),ind=$('.rail-ind'),tf=$('.ticks-focus'),tk=$('.ticks');
const place=()=>{
  const a=$('.rail-nav a.active');
  if(innerWidth<900||!a||!ind)return;
  const r=rail.getBoundingClientRect(),b=a.getBoundingClientRect(),y=b.top+b.height/2-r.top;
  ind.style.transform=`translateY(${y}px)`;ind.classList.add('on');
  tf.style.setProperty('--fy',(y-(tk.getBoundingClientRect().top-r.top))+'px');
};
const onScroll=()=>{
  const m=root.scrollHeight-innerHeight;
  root.style.setProperty('--p',m>0?Math.min(1,scrollY/m):0);
  if(!secs.length)return;
  let cur=secs[0];secs.forEach(s=>{if(s.getBoundingClientRect().top<innerHeight*.4)cur=s});
  if(cur===last)return;last=cur;
  links.forEach(a=>{const on=a.hash==='#'+cur.id;a.classList.toggle('active',on);on?a.setAttribute('aria-current','true'):a.removeAttribute('aria-current');
    if(on&&nav.scrollWidth>nav.clientWidth&&innerWidth<900)nav.scrollTo({left:a.offsetLeft-nav.clientWidth/2+a.clientWidth/2,behavior:'smooth'})});
  place();
};
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',()=>{onScroll();place()});onScroll();place();
if(document.fonts)document.fonts.ready.then(place);

// reveal on scroll
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
  $$('[data-r]').forEach(el=>io.observe(el));
}else $$('[data-r]').forEach(el=>el.classList.add('in'));
})();
