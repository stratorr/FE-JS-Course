(function app() {
  //VARIABLES

  const output = document.querySelector(".output-numbers");
  const num = document.querySelector(".num"); // вывод числа
  const amount = document.querySelector(".amount-numbers"); // к-во
  const min = document.querySelector(".from"); // от
  const max = document.querySelector(".to"); // до
  const button = document.querySelector(".btn");
  const repeatNums = document.querySelector(".num_repeat");

  //EVENTS

  button.addEventListener("click", () => {
    if (repeatNums.checked) {
      while (output.firstChild) {
        output.removeChild(output.firstChild);
      }
      generateNumberWithoutRepeat(min.value, max.value, amount.value);
    } else {
      showNumbers(min.value, max.value, amount.value);
    }
  });

  function generateNumberWithoutRepeat(min, max, amount) {
    min = Math.ceil(min);
    max = Math.floor(max);
    n = Number(amount);

    let arrWithoutRepeat = [...Array(max - min + 1).keys()]
      .map((i) => i + min) // range
      .reduce(
        (arr, elt) => (
          arr.splice(Math.random() * (arr.length + 1), 0, elt), arr
        ),
        []
      ) // shuffle
      .slice(0, n); // slice n

    if (min > max) {
      arrWithoutRepeat = [...Array(min - max + 1).keys()]
        .map((i) => i + max) // range
        .reduce(
          (arr, elt) => (
            arr.splice(Math.random() * (arr.length + 1), 0, elt), arr
          ),
          []
        ) // shuffle
        .slice(0, n); // slice n
    }

    arrWithoutRepeat.forEach((num) => {
      const newNum = document.createElement("div");
      newNum.classList.add("num");
      newNum.textContent = num;
      output.appendChild(newNum);
    });
  }

  // FUNCTIONS

  // Генерация Рандомного Числа
  function generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    if (min > max) {
      randomNumber = Math.floor(Math.random() * (min - max + 1)) + max;
    }
    return randomNumber;
  }
  // Вывод Чисел
  function showNumbers(min, max, amount) {
    while (output.firstChild) {
      output.removeChild(output.firstChild);
    }
    for (let i = 0; i < amount; i++) {
      const newNum = document.createElement("div");
      newNum.classList.add("num");
      newNum.textContent = generateRandomNumber(min, max);
      output.appendChild(newNum);
    }
  }

  window.addEventListener("load", () => {
    num.textContent = generateRandomNumber(0, 100);
  });
})();
