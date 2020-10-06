// Define Variables
const display = document.querySelector('#display');
const dataOutput = document.querySelector('#data-output');

const inputSize = document.querySelector('#input-size');
const selectFont = document.querySelector('#select-font');
const inputColor = document.querySelector('#input-color');
const inputBgColor = document.querySelector('#input-bg-color');
const inputEnterText = document.querySelector('#enter-text');
const inputTextArea = document.querySelector('#enter-text');

const showSize = document.querySelector('#show-size');
const showFont = document.querySelector('#show-font');
const showColor = document.querySelector('#show-color');
const showBgColor = document.querySelector('#show-bg-color');

// Event Listeners
inputSize.addEventListener('input', handleInputSize);
selectFont.addEventListener('change', handleSelectFont);
inputColor.addEventListener('change', handleShowColor);
inputBgColor.addEventListener('change', handleShowBgColor);
inputTextArea.addEventListener('change', handleTextArea);

// Event Handlers
function handleInputSize(e) {
  const fontSize = e.target.value + 'px' || inputSize.value + 'px';
  display.style.fontSize = fontSize;
  showSize.innerHTML = fontSize;

  updateDisplayOuput();
}

function handleSelectFont(e) {
  const fontFamily = e.target.value || showFont.value;
  display.style.fontFamily = fontFamily;
  showFont.innerHTML = fontFamily;

  updateDisplayOuput();
}

function handleShowColor(e) {
  const color = e.target.value || showColor.value;
  display.style.color = color;
  showColor.innerHTML = color;

  updateDisplayOuput();
}

function handleShowBgColor(e) {
  const backgroundColor = e.target.value || showBgColor.value;
  display.style.backgroundColor = backgroundColor;
  showBgColor.innerHTML = backgroundColor;

  updateDisplayOuput();
}

function handleTextArea(e) {
  const text = e.target.value || inputEnterText;
  display.innerHTML = text;
}

function updateDisplayOuput() {
  dataOutput.style.fontSize = inputSize;
  dataOutput.style.fontFamily = selectFont;
  dataOutput.style.color = inputColor;
  dataOutput.style.backgroundColor = inputBgColor;
}
