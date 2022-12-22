const headerEl = document.querySelector('header');

function addHeaderShadow() {
  headerEl.classList.toggle('header-shadow', window.scrollY > 0);
}

const bodyEl = document.querySelector('body');
const disableScroll = () => bodyEl.classList.add('prevent-scroll');
const enableScroll = () => bodyEl.classList.remove('prevent-scroll');

window.addEventListener('scroll', addHeaderShadow);
window.addEventListener('resize', enableScroll);

export { bodyEl, disableScroll, enableScroll };
