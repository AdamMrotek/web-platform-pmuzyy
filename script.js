const button = document.querySelector('button');
const passInput = document.querySelector('input');
const validationMessage = document.createElement('p');
const codenameForm = document.querySelector('.codename');
codenameForm.append(validationMessage);

const hasAtLeastTwoNumbers = (string) => {
  return string.match(/([0-9])/g)?.length >= 2 ? true : false;
};

const hasFiveChar = (string) => {
  return string?.length >= 5 ? true : false;
};
const hasOneSmallAndCapitalLetter = (string) => {
  let hasSmallLetter = /([a-z])/.test(string);
  let hasCapitalLetter = /([A-Z])/.test(string);
  return hasCapitalLetter && hasSmallLetter;
};

button.addEventListener('click', (e) => {
  e.preventDefault();
  const pass = passInput.value;
  if (
    hasAtLeastTwoNumbers(pass) &&
    hasOneSmallAndCapitalLetter(pass) &&
    hasFiveChar(pass)
  ) {
    validationMessage.innerHTML = 'Codename is valid!';
    console.log(true);
    return;
  }

  validationMessage.innerHTML = 'Codename is invalid!';
  console.log(false);
});
