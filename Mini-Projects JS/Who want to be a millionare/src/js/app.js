(function app() {
  //variables
  const ul = document.querySelectorAll("ul li");
  let gameEnd = document.querySelector(".game__end");
  let restartBtn = document.querySelector(".restart__btn");
  let earnPoints = document.querySelector(".earnPoints");
  let timer = document.querySelector(".timer");
  let money = "0$";
  //special
  let fifty = document.querySelector(".fifty-fifty");
  let callFriend = document.querySelector(".call-friend");

  //Events
  fifty.addEventListener("click", () => {
    fiftyOption();
  });

  callFriend.addEventListener("click", () => {
    friendOption();
  });

  window.addEventListener("load", startGame());

  //FUNCTIONS

  function startGame() {
    init();
  }

  //ПОДПРАВИТЬ

  function init() {
    // (B1) WRAPPER
    quiz.hWrap = document.getElementById("quizWrap");

    // (B2) QUESTIONS SECTION
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    // (B3) ANSWERS SECTION
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

    // (B4) GO!
    draw();
  }

  function draw() {
    // (C1) QUESTION
    quiz.hQn.textContent = quiz.data[quiz.now].question;

    // (C2) OPTIONS
    quiz.hAns.textContent = "";

    for (let i in quiz.data[quiz.now].option) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quiz" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.textContent = quiz.data[quiz.now].option[i];
      label.setAttribute("for", "quiz" + i);
      label.dataset.idx = i;
      label.addEventListener("click", () => {
        select(label);
      });
      quiz.hAns.appendChild(label);
    }
  }

  function select(option) {
    // (D1) DETACH ALL ONCLICK
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    // (D2) CHECK IF CORRECT
    let correct = option.dataset.idx == quiz.data[quiz.now].answer;
    if (correct) {
      quiz.score++;
      option.classList.add("correct");

      for (let i = 0; i < ul.length; i++) {
        if (!ul[ul.length - 1 - i].classList.contains("orange")) {
          ul[ul.length - 1 - i].classList.add("orange");
          money = ul[ul.length - 1 - i].textContent;
          break;
        }
      }
    } else {
      option.classList.add("wrong");
      gameOver();
    }

    // (D3) NEXT QUESTION OR END GAME
    quiz.now++;
    setTimeout(() => {
      if (quiz.now < quiz.data.length) {
        draw();
      } else {
        quiz.hQn.textContent = `Вы ответили на ${quiz.score} из ${quiz.data.length} правильно и заработали ${money}.`;
        quiz.hAns.textContent = "";
      }
    }, 1000);
  }

  //GameOver
  function gameOver() {
    if (quiz.now >= 4) earnPoints.textContent = "Вы выиграли: 1000 $";
    if (quiz.now >= 9) earnPoints.textContent = "Вы выиграли: 125 000 $";
    if (quiz.now < 4) earnPoints.textContent = "Вы выиграли: 0 $";
    setTimeout(() => {
      gameEnd.classList.remove("hide");
    }, 1000);

    //RESTART BTN
    restartBtn.addEventListener("click", () => {
      restart();
    });
  }
  //RestartGame
  function restart() {
    callFriend.classList.remove("hide");
    setTimeout(() => {
      gameEnd.classList.add("hide");
      quiz.now = 0;
      quiz.score = 0;
      fifty.removeAttribute("disabled", "disabled");
      callFriend.removeAttribute("disabled", "disabled");
      draw();
      ul.forEach((li) => li.classList.remove("orange"));
    }, 300);
  }

  //SPECIAL FUNC
  let dataWrongIndex = [];

  function fiftyOption() {
    for (const el of quiz.hAns.children) {
      //Проверка на верный ответ

      if (quiz.data[quiz.now].answer === 0) {
        if (el.getAttribute("data-idx") === "0") {
          el.setAttribute("data", "50-true");
        }
      } else if (quiz.data[quiz.now].answer === 1) {
        if (el.getAttribute("data-idx") === "1") {
          el.setAttribute("data", "50-true");
        }
      } else if (quiz.data[quiz.now].answer === 2) {
        if (el.getAttribute("data-idx") === "2") {
          el.setAttribute("data", "50-true");
        }
      } else if (quiz.data[quiz.now].answer === 3) {
        if (el.getAttribute("data-idx") === "3") {
          el.setAttribute("data", "50-true");
        }
      }

      //Закрасить неверные ответы

      if (!el.getAttribute("data", "50-true")) {
        el.style.backgroundColor = "black";
      }

      if (el.style.backgroundColor === "black" && el.hasAttribute("data-idx")) {
        dataWrongIndex.push(el.getAttribute("data-idx"));
      }
    }
    let random =
      dataWrongIndex[Math.floor(Math.random() * dataWrongIndex.length)];

    for (const label of quiz.hAns.children) {
      if (label.getAttribute("data-idx") === random) {
        label.style.backgroundColor = "transparent";
      }
    }
    fifty.setAttribute("disabled", "disabled");
  }

  function friendOption() {
    if (quiz.data[quiz.now].answer === 0) {
      alert("Я думаю ответ A");
    } else if (quiz.data[quiz.now].answer === 1) {
      alert("Я думаю ответ B");
    } else if (quiz.data[quiz.now].answer === 2) {
      alert("Я думаю ответ C");
    } else {
      alert("Я думаю ответ D");
    }
    callFriend.setAttribute("disabled", "disabled");
  }
})();
