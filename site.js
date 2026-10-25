const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
function closeMenu() {
  menu.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});
menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('is-open')) {
    closeMenu();
    menuButton.focus();
  }
});
const mobileBooking = document.querySelector('.mobile-booking');
const hero = document.querySelector('.hero');
let scrollQueued = false;
function updateBooking() {
  mobileBooking.classList.toggle('visible', hero.getBoundingClientRect().bottom <= 90);
  scrollQueued = false;
}
window.addEventListener('scroll', () => {
  if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateBooking); }
}, { passive: true });
window.addEventListener('resize', updateBooking);
window.addEventListener('load', updateBooking);
updateBooking();
