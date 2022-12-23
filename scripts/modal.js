import { enableScroll, disableScroll } from './main.js';
import projects from './portfolio.js';

function generatePopupWindowTemplate(project) {
  return `
    <article class="card">
      <div class="flex">
        <h2 class="card-title">${project.title}</h2>
        <button class="popup-close-button" type="button">
          <div class="close-icon" />
        </button>
      </div>
      <ul class="card-info">
        <li>CANOPY</li>
        <li>Back End Dev</li>
        <li>2015</li>
      </ul>
      <div class="popup-image">
        <img src="${project.image}" alt="Portfolio" />
      </div>
      <div class="popup-content">
        <p class="card-description">
          ${project.description}
        </p>
        <div class="popup-bottom">
          <ul class="card-tags">
            ${project.technologies.map((t) => `<li>${t}</li>`).join('')}
          </ul>
          <hr />
          <div class="popup-button-container">
            <a href="${project.live}" class="primary-button card-button">
              <span>See Live</span>
              <span class="popup-a-icon export-icon"/>
            </a>
            <a 
              href="${project.source}" 
              class="primary-button card-button" 
              target="_blank" 
              rel="noopener noreferrer">
               <span>See Source</span>
               <span class="popup-a-icon github-icon"/>
            </a>
          </div>
        </div>
      </div>
    </article>
`;
}

// Handle Popup Window
const popupEl = document.getElementById('popup');

function closePopup() {
  enableScroll();
  popupEl.classList.remove('show');
  popupEl.innerHTML = '';
}

function openPopup(index) {
  disableScroll();
  popupEl.classList.add('show');
  popupEl.innerHTML = generatePopupWindowTemplate(projects[index]);

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
