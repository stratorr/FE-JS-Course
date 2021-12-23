// Задание №1. Проверка на пустоту

// const isEmpty = obj => {
//   if (Object.keys(obj).length == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isEmpty({}));

//Задание №2. Умножаем все числовые свойства на 2

// let obj = {
//   1: 10,
//   2: "20",
//   3: 5,
// };

// const multiplyNumeric = obj => {
//   for (const el in obj) {
//     if (typeof obj[el] === "number") {
//       obj[el] *= 2;
//     }
//   }
// };

// multiplyNumeric(obj);

// Задание №3. Ввод числового значения

// const readNumber = () => {
//   let userNumber;
//   do {
//     userNumber = prompt("Введите число!");
//   } while (!isFinite(userNumber));
//   if (userNumber === "" || userNumber === null) return;
// };
// readNumber();

// Задание №4. Случайное число от min до max

// const random = (min, max) => Math.random() * (max - min) + min;
// console.log(random(1, 5));

// Задание №5. Случайное целое число от min до max

// const randomInteger = (min, max) => {
//   return Math.floor(Math.random() * (max + 1 - min) + min);
// };
// console.log(randomInteger(1, 5));

// Задание №6. Сделать первый символ заглавным

// let someString = "вася";

// const ucFirst = str => (someString = str[0].toUpperCase() + str.slice(1));
// ucFirst(someString);

// console.log(someString);

// Задание №7. Проверка на спам

// const checkSpam = str => {
//   str = str.toLowerCase();
//   return str.includes("viagra") || str.includes("xxx");
// };
// console.log(checkSpam("buy ViAgRA now"));
// console.log(checkSpam("xxxxx"));
// console.log(checkSpam("innocent rabbit"));

// Задание №8. Усечение строки

// const truncate = (str, maxlength) => {
//   if (str.length > maxlength) {
//     return str.slice(0, maxlength - 1) + "...";
//   }
//   return str;
// };
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));

// Задание №9. Выделить число

// let CurrencyValue = "$120";
// const extractCurrencyValue = str => +str.slice(1);
// console.log(extractCurrencyValue(CurrencyValue));

// Задание №10. Сумма введённых чисел
