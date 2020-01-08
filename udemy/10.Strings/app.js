let string = "some test string";

let firstLetter = string[0];
let lastLetter = string[string.length - 1];
console.log(
  `First letter of string "${string}" is ${firstLetter} and last letter is ${lastLetter}`
);

let result =
  firstLetter.toUpperCase() + string.slice(1, -1) + lastLetter.toUpperCase();
console.log(result);

result = string.indexOf("string");
console.log(result);

result = string.indexOf(" ", 5);
console.log(result);

result = string.substr(5, 4);
console.log(result);

result = string.slice(5, 9);
console.log(result);

result = string.slice(5, 9);
console.log(result);

result = string.slice(0, -6);
console.log(result);

const a = 20;
const b = 16;
result = "" + a + b;
// result = String(a) + String(b);
console.log(result);
