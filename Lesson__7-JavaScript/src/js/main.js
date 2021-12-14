// TASK_1. Переменные

// let admin;
// let name = "Danil";
// admin = name;
// alert(admin);

// TASK_2 . Константы

// const BIRTHDAY = "18.04.1982"; // здесь можно использовать бувы в верхнем регистре, потому что нам известно значение до выполнения скрипта.
// const AGE = someCode(BIRTHDAY); // переменная AGE вычисляется во время выполнения скрипта, и нам неизвестно значение заранее, поэтому нужно записать в нижнем регистре. const age.

//TASK_3 . Строки

// let name = "Ilya";
// alert(`hello ${1}`); // hello 1
// alert(`hello ${"name"}`); // hello name
// alert(`hello ${name}`); // Hello Ilya

//TASK_4 . Преобразования типов

// "" + 1 + 0; //10
// "" - 1 + 0; // -1
// true + false; // 1
// 6 / "3"; //2
// "2" * "3"; //6
// 4 + 5 + "px"; //9px
// "$" + 4 + 5; //$45
// "4" - 2; // 2
// "4px" - 2; // NaN
// 7 / 0; // Infinity
// " -9 " + 5; //-9 5
// " -9 " - 5; // -14
// null + 1; // 1
// undefined + 1; // NaN

// Задание №5. Постфиксная и префиксная формы

// let a = 1;
// let b = 1;
// let c = ++a; // 2
// let d = b++; //1

// Задание №6. Результат присваивания

// let a = 2;
// let x = 1 + (a *= 2); //5

// Задание №7. Операторы сравнения

// 5 > 4; // true
// "ананас" > "яблоко"; // true
// "2" > "12"; // fakse
// undefined == null; // true
// undefined === null; // false
// null == "\n0\n"; // false
// null === +"\n0\n"; // false

// Задание №8. Операторы взаимодействия

// let userName = prompt("Введите Ваше Имя");
// alert(`Ваше имя ${userName}`);

// Задание №9. Условные операторы

// if ("0") {
//   alert("Привет");
// }

// Выведется потому что строка не пустая и результать будет приравнен к true, условия выполнится.

// Задание №10. Условные операторы

// let question = alert("Каково официальное название JavaScript");
// let answer = prompt();

// if (answer === "ECMAScript") {
//   alert("Верно!");
// } else {
//   alert("«Не знаете? ECMAScript!»");
// }

// Задание №11. Покажите знак числа

// let userNum = Number(prompt("Введите Число"));

// if (userNum > 0) {
//   alert(1);
// } else if (userNum < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// Задание №12. Перепишите 'if' в '?'

// let result;

// if (a + b < 4) {
//   result = "Мало";
// } else {
//   result = "Много";
// }

// result = a + b < 4 ? "Мало" : "Много";

// Задание №13. Перепишите 'if..else' в '?'

// if (login == "Сотрудник") {
//   message = "Привет";
// } else if (login == "Директор") {
//   message = "Здравствуйте";
// } else if (login == "") {
//   message = "Нет логина";
// } else {
//   message = "";
// }

// let message =
//   login === "Сотрудник"
//     ? "Привет"
//     : login === "Директор"
//     ? "Здравствуйте"
//     : login === ""
//     ? "Нет Логина"
//     : "";

// Задание №14. ИЛИ.  Что выведет код ниже?

// alert( null || 2 || undefined ); //2

// Задание №15. ИЛИ. Что выведет код ниже?

// alert(alert(1) || 2 || alert(3)); // 1 Затем 2

// Задание №16. И

// alert(1 && null && 2); // null

// Задание №17. И

// alert(alert(1) && alert(2)); // Вызов alert не возвращает значения, будет 1 и undefined

// Задание №18.

// alert(null || (2 && 3) || 4); //3

// Задание №19. Проверка значения из диапазона

// let age;
// if (age >= 14 && age <= 90);

// Задание №20. Проверка значения вне диапазона

// let age;
// if (age >= 14 || age <= 90);
// if (!(age >= 14 && age <= 90));

//Задание №21. If

// if (-1 || 0) alert("first"); // Выполнится, -1 = true
// if (-1 && 0) alert("second"); // Не выполнится поскольку 0 = false
// if (null || (-1 && 1)) alert("third");  // Выполнится, 1 = true

// Задание №22. Проверка логина

// let request = prompt("Вы Кто?");

// if (!request) {
//   alert("Отменено");
// } else if (request !== "Админ") {
//   alert("Я вас не знаю");
// }
// if (request === "Админ") {
//   let password = prompt("Введите Пароль");
//   if (password === "Я Главный") {
//     alert("Здравствуйте!");
//   } else {
//     alert("Неверный пароль");
//   }
// }

// Задание №23. Напишите "if", аналогичный "switch"

// let browser;
// if (browser === "Edge") {
//   alert("You've got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// Задание №24. Переписать условия "if" на "switch"

// let a = +prompt("a?");

// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;

//   case 2:
//   case 3:
//     alert("2,3");
//     break;
// }

// Задание №25

// let number = 1;

// if (number > 0) {
//   number += 1;
// } else {
//   alert(number);
// }

//Задание №26.

// let number = -2;

// if (number > 0) {
//   number += 1;
// } else {
//   number -= 2;
// }

// Задание №27

// let number;

// if (number > 0) {
//   number += 1;
// } else if (number < 0) {
//   number -= 2;
// } else {
//   number = 10;
// }

// Задание №28.

// let firstNumber = 1;
// let secondNumber = 2;
// let thirdNumber = -1;

// let positiveNumber = 0;

// if (firstNumber > 0) n += 1;
// if (secondNumber > 0) n += 1;
// if (thirdNumber > 0) n += 1;

// console.log(positiveNumber);

//Задание №29.

// let firstNumber = 1;
// let secondNumber = -2;
// let thirdNumber = -1;

// let positiveNumber = 0;
// let negativeNumber = 0;

// if (firstNumber > 0) {
//   positiveNumber += 1;
// } else {
//   negativeNumber += 1;
// }

// if (secondNumber > 0) {
//   positiveNumber += 1;
// } else {
//   negativeNumber += 1;
// }

// if (thirdNumber > 0) {
//   positiveNumber += 1;
// } else {
//   negativeNumber += 1;
// }

// Задание №30

// let num1 = 1;
// let num2 = 2;

// if (num1 > num2) {
//   alert(num1);
// } else {
//   alert(num2);
// }

//Задание №31.

// let num1 = 4;
// let num2 = 1;

// if (num1 < num2) {
//   alert(1);
// } else {
//   alert(2);
// }

// Задание №32.

// let num1 = 1;
// let num2 = 2;

// if (num1 > num2) {
//   alert(num1);
// } else {
//   alert(num2);
// }

// if (num1 > num2) {
//   alert(num2);
// } else {
//   alert(num1);
// }

// Задание №33

// let a = 11;
// let b = 7;
// let temp;

// if (a > b) {
//   temp = a;
//   a = b;
//   b = temp;
//   alert(a);
//   alert(b);
// } else {
//   alert(a);
//   alert(b);
// }

// Задание №34.

// let a = 3;
// let b = 2;

// if (a !== b) {
//   a += b;
//   b += a;
// } else if (a === b) {
//   a = b = 0;
// }

// Задание №35.

// let a = 3;
// let b = 2;

// if (a !== b) {
//   if (a > b) {
//     b = a;
//   } else {
//     a = b;
//   }
// } else if (a === b) {
//   a = b = 0;
// }

// Задание №36.

// let a = 0;
// let b = 5;
// let c = 1;

// if (a < b && a < c) {
//   alert(a);
// } else if (b < a && b < c) {
//   alert(b);
// } else if (c < a && c < b) {
//   alert(c);
// }

// Задание №37.

// let a = 6;
// let b = 4;
// let c = 3;

// if ((b <= a && a <= c) || (b >= a && a >= c)) {
//   alert(a);
// } else if ((a <= b && b <= c) || (a >= b && b >= c)) {
//   alert(b);
// } else {
//   alert(c);
// }

// Задание №38.

// let a = 1;
// let b = 4;
// let c = 5;

// let min;
// let max;

// if (a > b && a > c) {
//   max = a;
// } else if (b > a && b > c) {
//   max = b;
// } else {
//   max = c;
// }

// if (a < b && a < c) {
//   min = a;
// } else if (b < a && b < c) {
//   min = b;
// } else {
//   min = c;
// }

// Задание №39.

// let a = 1;
// let b = 4;
// let c = 5;

// if (b < c && b < a) {
//   alert(a + c);
// } else if (a < c && a < b) {
//   alert(b + c);
// } else {
//   alert(b + a);
// }

// Задание №40.

// let a;
// let b;
// let c;

// if (a == b) {
//   alert(3);
// } else if (a == c) {
//   alert(2);
// } else {
//   alert(1);
// }
