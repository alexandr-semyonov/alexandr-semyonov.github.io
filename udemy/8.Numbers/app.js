//1. Получить число pi из Math и округлить его до 2-х знаков после точки

let result = Math.round(Math.PI * 100) / 100;

console.log(result, typeof result);

//2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

let maxValue = Math.max(15, 11, 16, 12, 51, 12, 13, 51);

console.log(`Max value ${maxValue}`);

//3. Работа с Math.random:
//a. Получить случайное число и округлить его до двух цифр после запятой
//b. Получить случайное целое число от 0 до X. X - любое произвольное число.

