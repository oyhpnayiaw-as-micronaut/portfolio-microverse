// client side form validation
const formEl = document.querySelector('form');

const emailError = document.createElement('span');
emailError.textContent = 'Email must be lowercase';
emailError.style.cssText = 'color: red; align-self: flex-start;';

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  emailError.remove();

  const { elements } = e.target;
  const email = elements.email.value;

  if (/[A-Z]/.test(email)) {
    const buttonEl = elements[elements.length - 1];
    buttonEl.insertAdjacentElement('beforebegin', emailError);
    return;
  }

  e.target.submit();
});
