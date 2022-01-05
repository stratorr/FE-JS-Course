(function app() {
  //variaables

  let btnStart = document.querySelector(".btn-start");
  let userName = document.getElementById("userName");
  let greeting = document.querySelector(".game__greetings");
  let ul = document.querySelectorAll("ul li");
  let points = document.querySelector(".points");
  let currentMoney = 0;

  //Events

  btnStart.addEventListener("click", () => {
    if (userName.value == "") {
      alert("Please Enter a name");
    } else {
      startGame();
      points.classList.remove("hide");
    }
  });

  function startGame() {
    greeting.classList.add("hide");
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
    quiz.hQn.innerHTML = quiz.data[quiz.now].question;

    // (C2) OPTIONS
    quiz.hAns.innerHTML = "";

    for (let i in quiz.data[quiz.now].option) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].option[i];
      label.setAttribute("for", "quizo" + i);
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
      console.log("correct");

      for (let i = 0; i < ul.length; i++) {
        if (!ul[ul.length - 1 - i].classList.contains("orange")) {
          ul[ul.length - 1 - i].classList.add("orange");
          currentMoney = ul[ul.length - 1 - i].textContent;
          break;
        }
      }
    } else {
      option.classList.add("wrong");
      console.log("wrong");
      gameOver();
    }
    // (D3) NEXT QUESTION OR END GAME
    quiz.now++;
    setTimeout(() => {
      if (quiz.now < quiz.data.length) {
        if (quiz.now === 5) {
          console.log("ЭТО ПЯТЫЙ ВОПРОС!"); //! Настроить несгораемую сумму на 5, 10 вопрос.
        }
        draw();
      } else {
        quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
        quiz.hAns.innerHTML = "";
      }
    }, 1000);
  }

  // (E) RESTART QUIZ
  function reset() {
    quiz.now = 0;
    quiz.score = 0;
    draw();
  }

  // GAME OVER

  function gameOver() {
    console.log("gameOver");
    console.log(currentMoney);
  }

  // SPECIAL FUNCTIONS

  function callFriend() {}
  function fifty() {}
})();
