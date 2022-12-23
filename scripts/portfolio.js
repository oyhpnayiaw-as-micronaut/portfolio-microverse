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

function generateProjectTemplate(project) {
  return `
      <article class="card">
        <div class="card-image">
          <img src="${project.image}" alt="Portfolio" />
        </div>
        <div class="card-content">
          <h2 class="card-title">${project.title}</h2>
          <ul class="card-info">
            <li>CANOPY</li>
            <li>Back End Dev</li>
            <li>2015</li>
          </ul>
          <p class="card-description" style="overflow: hidden; max-height: 45px">
            ${project.description}  
          </p>
          <ul class="card-tags">
            <li>html</li>
            <li>css</li>
            <li>javaScript</li>
          </ul>
          <button class="primary-button card-button" type="button">
            See Project
          </button>
        </div>
      </article>
      `;
}

const portfolioEl = document.getElementById('portfolio');

projects.forEach((project) => {
  const projectEl = document.createElement('div');
  projectEl.innerHTML = generateProjectTemplate(project);
  portfolioEl.appendChild(projectEl);
});

export default projects;
