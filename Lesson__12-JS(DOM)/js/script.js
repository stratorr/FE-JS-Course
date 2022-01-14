// Задание №1. Дочерние элементы в DOM

// const div = document.querySelector("div");
// console.log(div);
// const ul = document.querySelector("ul");
// console.log(ul);
// const li = document.querySelector("ul li:last-child");
// console.log(li);

// Задание №2. Соседи

/* 
Если elem – произвольный узел DOM-элемента…

Правда, что elem.lastChild.nextSibling всегда равен null? - Да, потому что elem.lastChild
будет последним элементом и у него не будет nextSibling

Правда, что elem.children[0].previousSibling всегда равен null ? - Нет, потому что перед ним могут
быть другие узлы.

*/

// Задание №3. Выделите ячейки по диагонали

// const table = document.querySelector("table");
// for (let i = 0; i < table.rows.length; i++) {
//   const row = table.rows[i];
//   row.cells[i].style.backgroundColor = "red";
// }

// Задание №3. Поиск элементов

// let ageTable = document.querySelector("#age-table");
// let label = document.querySelectorAll("#age-table label");
// console.log(label);
// let firstTd = ageTable.querySelector("td");
// console.log(firstTd);
// const form = document.querySelector('form[name="search"]');
// console.log(form);
// const firstInput = form.querySelector("input");
// console.log(firstInput);
// const lastInput = form.lastElementChild;
// console.log(lastInput);

// Задание №4. Подсчет потомков

// let food = document.querySelectorAll(".food li");

// for (let li of food) {
//   let title = li.firstChild.textContent;
//   title = title.trim();
//   let count = li.getElementsByTagName("li").length;
//   console.log(`${title}: ${count}`);
// }

// Задание №5. Свойство nodeType

//Что выведет этот код?

// alert(document.body.lastChild.nodeType);

/* Выведет 1, узел элемента */

//Задание №6. Тег в комментарии

// let body = document.body;
// body.innerHTML = "<!--" + body.tagName + "-->";
// alert(body.firstChild.data); // что выведет?
//комментарий является первым и единственным потомком body.firstChild,
//далее получаем значение data, в alert будет выведено BODY, tagname всегда в верхнем регистре.

//Задание №7. Где в DOM-иерархии "document"?

/* 
Дайте ответы на вопросы:
1. Объектом какого класса является document?
2. Какое место он занимает в DOM-иерархии?
3. Наследует ли он от Node или от Element, или может от HTMLElement? 
*/

// 1. [object HTMLDocument].
/* 2.
  методы класса находятся в prototype конструктора. 
  Например, в HTMLDocument.prototype находятся методы для объектов типа document. 
  Иерархия:
  alert(HTMLDocument.prototype.constructor.name); // HTMLDocument
  alert(HTMLDocument.prototype.__proto__.constructor.name); // Document
  alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name); // Node
*/
// 3. От Node - да, это видно из цепочки прототипов, от Element и HTMLElement - нет.

// Задание №8. Очистите элемент

// let ol = document.querySelector("#elem");

// function clear(elem) {
//   while (elem.firstChild) {
//     elem.removeChild(elem.firstChild);
//   }
// }
// clear(ol);

// Задание №9. Почему остаётся "aaa"?

// alert(table); // таблица, как и должно быть
// table.remove();

/* Ответ: HTML в задаче некорректен. Если просмотреть в интсрументах разработчика,
текст "ааа" отображается до таблицы, так как в таблице не может бытть теста и браузер
автоматически исправляет эту ошибку и выносит "ааа" из таблицы.
*/

// Задание №10. Создайте список

// let container = document.querySelector(".container");

// function renderUl() {
//   const fragment = document.createDocumentFragment();
//   let ul = document.createElement("ul");
//   fragment.appendChild(ul);
//   container.appendChild(fragment);

//   while (true) {
//     let value = prompt("Enter a value");
//     if (!value) {
//       break;
//     }
//     let li = document.createElement("li");
//     li.textContent = value;
//     ul.appendChild(li);
//   }
// }
// renderUl();

// Задание №11. Вставьте HTML в список

// let one = document.querySelector("#one");
// one.insertAdjacentHTML("afterend", "<li>2</li><li>3</li>");
