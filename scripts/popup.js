import { enableScroll, disableScroll } from './main.js';

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
              See Live<span class="popup-a-icon export-icon"/>
            </a>
            <a 
              href="${project.source}" 
              class="primary-button card-button" 
              target="_blank" 
              rel="noopener noreferrer">
                See Source<span class="popup-a-icon github-icon"/>
            </a>
          </div>
        </div>
      </div>
    </article>
`;
}

// prettier-ignore
const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";

// prettier-ignore
const source = 'https://github.com/oyhpnayiaw-as-micronaut/portfolio-microverse';

const projects = [
  {
    title: 'Tonic',
    image: 'assets/images/portfolio-1.svg',
    description,
    technologies: ['html', 'css', 'javaScript'],
    live: '#',
    source,
  },
  {
    title: 'Multi-Post Stories',
    image: 'assets/images/portfolio-2.svg',
    description,
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'bootstraps'],
    live: '#',
    source,
  },
  {
    title: 'Tonic',
    image: 'assets/images/portfolio-3.svg',
    description,
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'bootstraps'],
    live: '#',
    source,
  },
  {
    title: 'Multi-Post Stories',
    image: 'assets/images/portfolio-4.svg',
    description,
    technologies: ['html', 'css', 'javaScript'],
    live: '#',
    source,
  },
];

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
