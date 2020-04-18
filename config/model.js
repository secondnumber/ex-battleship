const model = {
  boardSize: 7,
  nimShips: 3,
  shipLength: 3,
  shipsSunk: 0,
  ships: [
    { locations: ['06', '16', '26'], hits: ['', '', ''] },
    { locations: ['24', '34', '44'], hits: ['', '', ''] },
    { locations: ['10', '11', '12'], hits: ['', '', ''] },
  ],
  fire(guess) {
    for (let i = 0; i < this.ships[i]; i += 1) {
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
      view.displayMiss(guess);
      view.displayMessage('You missed.');
      return false;
    }
  },
  isSunk(ship) {
    for (let i = 0; i < this.shipLength; i += 1) {
      if (ship.hits[i] !== 'hit') {
        return false;
      }
      return true;
    }
  },
};

model.fire('06');
model.fire('07');
