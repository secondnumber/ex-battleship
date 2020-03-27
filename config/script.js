const position1 = Math.floor(Math.random() * 5);
const position2 = position1 + 1;
const position3 = position2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isShunk = false;
while (isShunk === false) {
  guess = prompt('Введите число от 0 до 6');
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
        isShunk = true;
        alert('Корабль потоплен!');
      }
    } else {
      alert('Промахнулся');
    }
  }
}
