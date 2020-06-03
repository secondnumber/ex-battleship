import controller from './controller.js';
import model from './model.js';

function handleKeyPress(e) {
  const fireButton = document.getElementById('fireButton');
  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}

function handleFireButton() {
  const guessInput = document.getElementById('guessInput');
  const guess = guessInput.value.toUpperCase();
  controller.processGuess(guess);
  guessInput.value = '';
}

function init() {
  const fireButton = document.getElementById('fireButton');
  fireButton.onclick = handleFireButton;
  const guessInput = document.getElementById('guessInput');
  guessInput.onkeypress = handleKeyPress;
  model.generateShipLocations();
}

window.onload = init;
