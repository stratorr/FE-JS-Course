// Задание No1. Переведите текст вида border-left-width в borderLeftWidth

// const camelize = (str) => {
//   return str
//     .split("-")
//     .map((el, index) => {
//       if (index == 0) {
//         return el;
//       } else {
//         return el[0].toUpperCase() + el.slice(1);
//       }
//     })
//     .join("");
// };
// console.log(camelize("-webkit-transition"));

// Задание №2. Фильтрация по диапазону

// let arr = [5, 3, 8, 1];
// const filterRange = (arr, a, b) => {
//   return arr.filter((el) => a <= el && el <= b);
// };
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);
// console.log(arr);

// Задание №3 Фильтрация по диапазону «на месте»

// let arr = [5, 3, 8, 1];

// const filterRangeInPlace = (arr, a, b) => {
//   for (let i = 0; i < arr.length; i++) {
//     let elem = arr[i];
//     if (elem < a || elem > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// };
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// Задание №4. Сортировать в порядке по убыванию

// let arr = [5, 2, 1, -10, 8];
// let sortArr = arr.sort((prev, next) => next - prev);
// console.log(sortArr);

//Задание №5. Скопировать и отсортировать массив

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);

// function copySorted(arr) {
//   let copyArr = arr.slice();
//   return copyArr.sort();
// }
// console.log(sorted);
// console.log(arr);

//Задание №6. Создать расширяемый калькулятор

// function calculator(num1, num2, operation) {
//   switch (operation) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num2 !== 0 ? num1 / num2 : Infinity;
//   }
// }
// calculator(1, 2, "+");

// Задание №7. Трансформировать в массив имён

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [vasya, petya, masha];
// let names = users.map((el) => el.name);
// alert(names); // Вася, Петя, Маша

// Задание №8. Отсортировать пользователей по возрасту

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let arr = [vasya, petya, masha];

// sortByAge(arr);
// function sortByAge(arr) {
//   return arr.sort((prev, next) => prev.age - next.age);
// }
// console.log(arr[0].name);
// console.log(arr[1].name);
// console.log(arr[2].name);

// Задание №9. Получить средний возраст

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let arr = [vasya, petya, masha];
// function getAverageAge(arr) {
//   return (
//     arr.reduce((acc, currentUser) => acc + currentUser.age, 0) / arr.length
//   );
// }
// alert(getAverageAge(arr)) // (25 + 30 + 29) / 3 = 28;

// Задание №10. Оставить уникальные элементы массива

// let strings = [
//   "кришна",
//   "кришна",
//   "харе",
//   "харе",
//   "харе",
//   "харе",
//   "кришна",
//   "кришна",
//   ":-O",
// ];
// function unique(arr) {
//   let result = [];
//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }
//   return result;
// }
// alert(unique(strings));

// Задание №11. Фильтрация уникальных элементов массива

// let strings = [
//   "кришна",
//   "кришна",
//   "харе",
//   "харе",
//   "харе",
//   "харе",
//   "кришна",
//   "кришна",
//   ":-O",
// ];
// const unique = (strings) => {
//   let res = [...new Set(strings)];
//   return res;
// };
// alert(unique(strings));

// Задание №12. Перебираемые ключи

// let map = new Map();
// map.set("name", "John");
// let keys = Array.from(map.keys());
// keys.push("more");
// console.log(keys);

/* Ответ: map.keys() возвращает обьект, а не массив, для этого конвертируем обьект ,
с помощью метода Array.from и получаем массив */

// Задание №13. Независимы ли счётчики?

// function makeCounter() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }
// let counter = makeCounter();
// let counter2 = makeCounter();
// alert(counter()); // 0
// alert(counter()); // 1
// alert(counter2()); // 0
// alert(counter2()); // 1

// Ответ: у counter1 и counter2 независимые внешние лексические окружения, у каждой ф-ции своя
// переменная count, в результате будет 0, 1 , 0 , 1.

// function Counter() {
//   let count = 0;
//   this.up = function () {
//     return ++count;
//   };
//   this.down = function () {
//     return --count;
//   };
// }
// let counter = new Counter();
// alert(counter.up()); // ? 1
// alert(counter.up()); // ? 2
// alert(counter.down()); // ? 1

// Ответ: будет работать, обе ф-ции созданы с одним и тем же внешним лексическим окружением и имеют доступ к
// переменной count.

// Задание №15*. Вычислить факториал

// const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));
// console.log(factorial(4));
