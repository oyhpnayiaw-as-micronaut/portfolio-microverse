import { generatePopupTemplate, projects } from './popup.js';

const body = document.querySelector('body');
const header = document.querySelector('header');

function addHeaderShadow() {
  header.classList.toggle('header-shadow', window.scrollY > 0);
}

const disableScroll = () => body.classList.add('prevent-scroll');
const enableScroll = () => body.classList.remove('prevent-scroll');

window.addEventListener('scroll', addHeaderShadow);
window.addEventListener('resize', enableScroll);

// Handle Menu
const navEl = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

const menuBtn = document.querySelector('.menu');
const menuCloseBtn = document.querySelector('.menu-close');

function openMenu() {
  disableScroll();
  navEl.classList.add('open');
}

function closeMenu() {
  enableScroll();
  navEl.classList.remove('open');
}

menuBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);
navEl.addEventListener('click', closeMenu);

navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Handle Popup
const popup = document.getElementById('popup');

function closePopup() {
  enableScroll();
  popup.classList.remove('show');
  popup.innerHTML = '';
}

function openPopup(index) {
  disableScroll();
  popup.classList.add('show');
  popup.innerHTML = generatePopupTemplate(projects[index]);

  const popupBtns = document.querySelectorAll(
    '.popup-close-button, .popup-button-container > a',
  );

  popupBtns.forEach((btn) => {
    btn.addEventListener('click', closePopup);
  });
}

const seeProjectBtn = document.querySelectorAll('.card-button');

seeProjectBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => openPopup(index));
});
