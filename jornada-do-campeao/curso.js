const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
function closeMenu(){menu.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');}
toggle.addEventListener('click',()=>{const open=menu.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));});
menu.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.classList.contains('is-open')){closeMenu();toggle.focus();}});
const cta=document.querySelector('.mobile-cta');
const hero=document.querySelector('.hero');
let queued=false;
function updateCta(){cta.classList.toggle('visible',hero.getBoundingClientRect().bottom<=90);queued=false;}
window.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(updateCta);}},{passive:true});
window.addEventListener('resize',updateCta);
window.addEventListener('load',updateCta);
updateCta();
