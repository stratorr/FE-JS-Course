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

// const sumInput = () => {
//   let arr = [];
//   let sum = 0;

//   while (true) {
//     let userNumber = prompt("Введите число");
//     if (userNumber === null || userNumber === "" || !isFinite(userNumber))
//       break;
//     arr.push(+userNumber);
//   }

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum;
// };

// sumInput();

// Задание №12. Обязателен ли "else"?

/*
  function checkAge(age) {
  if (age > 18) {
  return true;
  } else {
  return confirm('Родители разрешили?');
  }
}
Будет ли эта функция работать как-то иначе, если убрать else?
function checkAge(age) {
  if (age > 18) {
  return true;
  }

  return confirm('Родители разрешили?');
}
Есть ли хоть одно отличие в поведении этого варианта?
*/

// Ответ: две функции одинаковые, отличий в работе нету. Можно не использовать условие else.

// Задание №13. Перепишите функцию, используя оператор '?' или '||'

// function checkAge(age) {
//   return age > 18 ? true : confirm("Родители разрешили?");
// }

// function checkAge(age) {
//   return age > 18 || confirm("Родители разрешили?");
// }

// checkAge(19);

// Задание №14. Функция min(a, b)

// const min = (a, b) => {
//   return a < b ? a : b;
// };
// console.log(min(1, 1));

//Задание №15. Функция pow(x,n)

// const pow = (x, n) => x ** n;

// let x = prompt("Введите х");
// let n = prompt("Введите n");

// if (n < 1) {
//   alert(`Введите целое число ${n}`);
// } else {
//   alert(pow(x, n));
// }

// Задание №16. Перепишите с использованием функции-стрелки

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Вы согласны?",
//   function () {
//     alert("Вы согласились.");
//   },
//   function () {
//     alert("Вы отменили выполнение.");
//   }
// );

// C Ипользованием Arrow Function

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };
// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
// );

// Задание №17. Робинзон Крузо

// let profit = 3333; // доход в месяц
// let palmPrice = 8000; // стоимость пальмы
// let costs = 1750; // растраты в месяц
// let dayInterval; //кол-во дней чтобы собрать на пальму

// let totalIncome = profit - costs; // доход в месяц с растратами

// dayInterval = Math.round(
//   +parseFloat(palmPrice / totalIncome).toFixed(2) * 30.417
// );
// console.log(`Нужно ${dayInterval} дня чтобы собрать на пальму`);

// Задание №18. Вопросы пользователю

// const getSum = () => {
//   let sum = 0;
//   for (let i = 0; i < 10; i++) {
//     let userNumber = +prompt("Введите число");
//     if (userNumber < 0) {
//       sum += userNumber;
//     }
//   }
//   return sum;
// };
// alert(getSum());

// Задание №19. Скопирован ли массив?

// let fruits = ["Яблоки", "Груша", "Апельсин"];
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
// alert(fruits.length);

// Ответ: Массив скопирован, потому что является объектом. Объекты хранятся и копируются «по ссылке».
// Поэтому переменные shoppingCart и fruits ссылаются на один и тот же массив.

// Задание №20. Операции с массивами

// let styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles[Math.floor(styles.length - 1) / 2] = "Классика";
// alert(styles.shift());
// styles.unshift("Рэп", "Регги");
// alert(styles);

// Задание №21. Вызов в контексте массива

// Каков результат? Почему?

// let arr = ["a", "b"];
// arr.push(function () {
//   alert(this);
// });
// arr[2]();

/* Ответ: результатом будет => a, b, function () { alert(this) }. Потому что arr[2]() вызывает функцию как
метод обьекта. В итоге метод получает в качестве this объект arr и выводит массив.
*/
