import view from './view.js';
import model from './model.js';

const controller = {
  guesses: 0,
  processGuess(guess) {
    const location = parseGuess(guess);
    if (location) {
      this.guesses++;
      const hit = model.fire(location);
      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage(`You sank all my battleships in ${this.guesses} guesses`);
      }
    }
  },
};

function parseGuess(guess) {
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  if (guess === null || guess.length !== 2) {
    alert('Please enter a letter and a number on the board.');
  } else {
    const firstChar = guess.charAt(0);
    const row = alphabet.indexOf(firstChar);
    const column = guess.charAt(1);

    if (isNaN(row) || isNaN(column)) {
      alert('That isn"t on the board.');
    } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
      alert('That is off the board.');
    } else {
      return row + column;
    }
    return null;
  }
}

export default controller;
