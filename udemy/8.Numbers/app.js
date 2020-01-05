//1. Получить число pi из Math и округлить его до 2-х знаков после точки

let result = Math.round(Math.PI * 100) / 100;

console.log(result, typeof result);

//2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

let maxValue = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

console.log(`Max value ${maxValue}`);

//3. Работа с Math.random:
//a. Получить случайное число и округлить его до двух цифр после запятой
//b. Получить случайное целое число от 0 до X. X - любое произвольное число.

/* a */
let randomValue = Math.random().toFixed(2);
console.log(`Random value ${randomValue}`);

/* b */

let x = 8;
let randomRangeValue = Math.round(Math.random() * x);

console.log(`Random range value from 0 to ${x} -- ${randomRangeValue}`);

//4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

const num1 = 0.6;
const num2 = 0.7;
let sumOfFloat = (num1 * 100 + num2 * 100) / 100;

console.log(`результат вычисления 0.6 + 0.7 = ${sumOfFloat}`);

//5. Получить число из строки ‘100$’

let str = "100$";
let valueFromStr = parseInt(str);
console.log(`число из строки ${str} равно ${valueFromStr}`);