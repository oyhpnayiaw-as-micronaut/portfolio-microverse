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

//
//
//
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

// client validation setup

const getForm = document.querySelector('form');
const getEmail = document.querySelector('input[type="email"]');
const getMessage = document.querySelector('form .error-msg');

function showError(msg) {
  getMessage.style.display = 'block';
  getMessage.innerText = msg;
}

function showSuccess(msg) {
  getMessage.style.display = 'block';
  getMessage.style.color = 'green';
  getMessage.style.borderColor = 'green';
  getMessage.innerText = msg;
}

function checkLowerCase(input) {
  if (input.value !== input.value.toLowerCase()) {
    showError(
      `${input.type.toUpperCase()} should be in lowercase. Please resubmit again.`,
    );
  } else {
    showSuccess("Thank You. We'll consider it.");
    getForm.submit();
  }
}

getForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkLowerCase(getEmail);
});

// end validation

// Start Local Storage

const inputDatas = JSON.parse(localStorage.getItem('inputDatas')) || [];

function addData(name, email, text) {
  inputDatas.push({ name, email, text });
  localStorage.setItem('inputDatas', JSON.stringify(inputDatas));
  return { name, email, text };
}

function showData({ name, email, text }) {
  getName.value = name;
  getEmail.value = email;
  getText.value = text;
}

inputDatas.forEach(showData);

// End Local Storage

getForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkLowerCase(getEmail);
});

getForm.addEventListener('change', (e) => {
  e.preventDefault();
  addData(getName.value, getEmail.value, getText.value);
});
