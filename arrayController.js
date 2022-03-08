const arrayForm = document.querySelector('.array-methods');
const arrayButton = arrayForm.querySelector('button');
const arrayInput = arrayForm.querySelector('input[name="arrayInput"]');

const arrayOperationResult = document.createElement('p');
arrayForm.append(arrayOperationResult);
// arrayButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(e);
// });
const divisibleByTwo = (arr) => {
  return arr.filter((numb) => numb % 2 === 0);
};
const sumArr = (arr) => {
  return arr.reduce((acc, currentValue) => {
    if (typeof currentValue === 'number' && currentValue !== NaN)
      return (acc += currentValue);
    return acc;
  }, 0);
};
const stringOfValueToArray = (string) => {
  const newArr = string.split(',').map((numerString) => {
    return parseFloat(numerString);
  });
  // need to chcek if value exist (is not null), comparision to value===null does NOT work, also 0 is false value eh!
  return newArr.filter((num) => {
    if (num || num === 0) return true;
  });
};

arrayForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const radioValue = arrayForm.querySelector(
    'input[type="radio"]:checked'
  ).value;

  // check on value of the filter
  const valuesArray = stringOfValueToArray(arrayInput.value);
  if (radioValue === 'filter') {
    //if values filter set text to numbers divisible by two
    console.log('im here');
    arrayOperationResult.innerHTML = divisibleByTwo(valuesArray);
    return;
  }
  //if value reduce then add the numbers
  arrayOperationResult.innerHTML = sumArr(valuesArray);
});
