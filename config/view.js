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


