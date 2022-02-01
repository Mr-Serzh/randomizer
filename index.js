const minInputEl = document.querySelector('.js-min-input');
const maxInputEl = document.querySelector('.js-max-input');
const outputEl = document.querySelector('.js-output');
const rezultBtnEl = document.querySelector('.js-rezult-btn');
const resetBtnEl = document.querySelector('.js-reset-btn');

minInputEl.addEventListener('input', minInput);
maxInputEl.addEventListener('input', maxInput);
// outputEl.addEventListener('input', output);
rezultBtnEl.addEventListener('click', rezultBtn);
resetBtnEl.addEventListener('click', resetBtn);

let minNumber = '';
let maxNumber = '';
let sameNumber;

function minInput() {
  minNumber = Number.parseInt(minInputEl.value);
  return minNumber;
}

function maxInput() {
  maxNumber = Number.parseInt(maxInputEl.value);
  return maxNumber;
}

function rezultBtn() {
  const result = Math.round(
    Math.random() * (maxNumber - minNumber) + minNumber,
  );

  if (sameNumber === result) {
    return rezultBtn();
  } else {
    sameNumber = result;
    console.log(result);
    return (outputEl.value = result);
  }
}

function resetBtn() {
  return (
    (maxInputEl.value = ''),
    (minInputEl.value = ''),
    (outputEl.value = ''),
    (minNumber = ''),
    (maxNumber = '')
  );
}
