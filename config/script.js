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
