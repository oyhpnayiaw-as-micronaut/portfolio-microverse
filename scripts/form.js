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
// end validation

// populate form with data from local storage
const formData = JSON.parse(localStorage.getItem('formData')) || {};

Object.entries(formData).forEach(([key, value]) => {
  formEl.elements[key].value = value;
});

/// trigger when form is updated
function change() {
  const { elements } = this;

  const data = JSON.stringify({
    name: elements.name.value,
    email: elements.email.value,
    message: elements.message.value,
  });

  localStorage.setItem('formData', data);
}

formEl.addEventListener('change', change);
