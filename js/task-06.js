console.log('task-06');

const numbers = [];
let input;
let total = 0;

do {
  input = prompt('Введите число');

  if (input === null) {
    break;
  }
  if (isNaN(input)) {
    alert('Вы ввели не число введите число');
    input = prompt('Введите число');
  } else {
    numbers.push(Number(input));
  }
} while (input !== null);

if (numbers.length === 0) {
  console.log('Массив пуст');
} else {
  for (const i of numbers) {
    total += i;
  }
  console.log(`Общая сумма чисел равна ${total}`);
}
