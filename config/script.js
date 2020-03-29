const position1 = 1;
const position2 = 2;
const position3 = 3;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;
while (isSunk === false) {
  guess = prompt('Введите число от 0 до 6');
  guess = +guess;
  if (guess < 0 || guess > 6) {
    alert('Число должно быть от 0 до 6');
  } else {
    guesses += 1;
    if (
      guess === position1 ||
      guess === position2 ||
      guess === position3
    ) {
      alert('Попал!');
      hits += 1;
      if (hits === 3) {
        isSunk = true;
        alert('Корабль потоплен!');
      }
    } else {
      alert('Промахнулся');
    }
  }
}

let stats = `Ты сделал ${guesses} попыток, чтобы потопить корабль1`;
alert(stats);

