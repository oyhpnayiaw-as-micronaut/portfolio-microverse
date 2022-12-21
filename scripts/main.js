const body = document.querySelector('body');
const header = document.querySelector('header');

function addHeaderShadow() {
  header.classList.toggle('header-shadow', window.scrollY > 0);
}

window.addEventListener('scroll', addHeaderShadow);

const navEl = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link');

const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');

function openMenu() {
  navEl.style.display = 'flex';
  body.style.cssText = 'position: fixed; overflow: hidden;';
}

function closeMenu() {
  if (navEl.style.display === 'flex' && window.innerWidth < 768) {
    navEl.style.display = 'none';
    body.style.cssText = 'position: static; overflow: visible;';
  }
}

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

window.addEventListener('resize', () => {
  body.style.cssText = 'position: static; overflow: visible;';

  if (window.innerWidth > 768) {
    navEl.style.display = 'flex';
  } else {
    navEl.style.display = 'none';
  }
});
