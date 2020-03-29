<<<<<<< Updated upstream
const playGame = () => {
  let position1 = Math.floor(Math.random() * 5);
  let position2 = position1 + 1;
  let position3 = position2 + 1;
  let shot = prompt('Выстрел: от 0 до 6', 100);
  while (shot < 0 || shot > 6) {
    shot = prompt('Выстрел: от 0 до 6', 100);
  }
  let count = 0;
  console.log(position1);
  console.log(position2);
  console.log(position3);
  if (
    shot === position1 ||
    shot === position2 ||
    shot === position3
  ) {
    count += 1;
    console.log('Yes');
    console.log(count);
  } else {
    console.log('No');
  }
};

playGame();
=======
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
>>>>>>> Stashed changes
