const view = {
  displayMessage(message) {
    const messageArea = document.querySelector('.messageArea');
    messageArea.innerHTML = message;
  },
  displayHit(location) {
    const cell = document.getElementById(location);
    cell.setAttribute('class', 'hit');
  },
  displayMiss(location) {
    const cell = document.getElementById(location);
    cell.setAttribute('class', 'miss');
  },
};

const model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,
  ships: [
    { locations: ['0', '0', '0'], hits: ['', '', ''] },
    { locations: ['0', '0', '0'], hits: ['', '', ''] },
    { locations: ['0', '0', '0'], hits: ['', '', ''] },
  ],
  generateShipLocations() {
    let locations;
    for (let i = 0; i < this.numShips; i++) {
      do {
        locations = this.generateShip();
      } while (this.collision(locations));
      this.ships[i].locations = locations;
    }
  },
  generateShip() {
    const direction = Math.floor(Math.random() * 2);
    let row;
    let col;
    if (direction === 1) {
      row = Math.floor(Math.random() * this.boardSize);
      col = Math.floor(Math.random() * this.boardSize - this.shipLength);
    } else {
      row = Math.floor(Math.random() * this.boardSize - this.shipLength);
      col = Math.floor(Math.random() * this.boardSize);
    }
    const newShipLocation = [];
    for (let i = 0; i < this.shipLength; i++) {
      if (direction === 1) {
        newShipLocation.push(row + '' + (col + i));
      } else {
        newShipLocation.push((row + i) + '' + col);
      }
    }
    return newShipLocation;
  },
  collision(locations) {
    for (let i = 0; i < this.numShips; i++) {
      let ship = model.ships[i];
      for (let j = 0; j < locations.length; j++) {
        if (ship.locations.indexOf(locations[j]) >= 0) {
          return true;
        }
      }
    }
    return false;
  },
  fire(guess) {
    for (let i = 0; i < this.numShips; i += 1) {
      const ship = this.ships[i];
      const index = ship.locations.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = 'hit';
        view.displayHit(guess);
        view.displayMessage('Hit!');
        if (this.isSunk(ship)) {
          view.displayMessage('You sank my battleship!');
          this.shipsSunk += 1;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage('You missed.');
    return false;
  },
  isSunk(ship) {
    for (let i = 0; i < this.shipLength; i += 1) {
      if (ship.hits[i] !== 'hit') {
        return false;
      }
    }
    return true;
  },
};

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

function init() {
  const fireButton = document.getElementById('fireButton');
  fireButton.onclick = handleFireButton;
  const guessInput = document.getElementById('guessInput');
  guessInput.onkeypress = handleKeyPress;
  model.generateShipLocations();
}

function handleFireButton() {
  const guessInput = document.getElementById('guessInput');
  const guess = guessInput.value;
  controller.processGuess(guess);
  guessInput.value = '';
}


function handleKeyPress(e) {
  const fireButton = document.getElementById('fireButton');
  if (e.keyCode === 13) {
    fireButton.click();
    return false;
  }
}

window.onload = init;
