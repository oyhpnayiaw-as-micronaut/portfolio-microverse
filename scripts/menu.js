import { bodyEl } from './main.js';

const navEl = document.querySelector('.nav-list');

const menuBtn = document.querySelector('.menu');

function toggleMenu() {
  navEl.classList.toggle('open');
  bodyEl.classList.toggle('prevent-scroll');
}

menuBtn.addEventListener('click', toggleMenu);
navEl.addEventListener('click', toggleMenu);
