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
    fiftyFunc();
  });

  callFriend.addEventListener("click", () => {
    callFriendFunc();
  });

  window.addEventListener("load", startGame());

  //FUNCTIONS

  function startGame() {
    init();
  }

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
      resetTimer();
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
        quiz.hQn.textContent = `Вы ответили на ${quiz.score} из ${quiz.data.length} вопросов правильно и заработали ${money}.`;
        quiz.hAns.textContent = "";
        stopTimer();
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
      resetTimer();
      ul.forEach((li) => li.classList.remove("orange"));
    }, 300);
  }

  //SPECIAL FUNCTIONS

  let dataWrongIndex = [];

  function fiftyFunc() {
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
        el.style.backgroundColor = "white";
        el.style.color = "white";
      }

      if (el.style.backgroundColor === "white" && el.hasAttribute("data-idx")) {
        dataWrongIndex.push(el.getAttribute("data-idx"));
      }
    }
    let randomWrongIndex =
      dataWrongIndex[Math.floor(Math.random() * dataWrongIndex.length)];

    for (const label of quiz.hAns.children) {
      if (label.getAttribute("data-idx") === randomWrongIndex) {
        label.style.backgroundColor = "transparent";
        label.style.color = "black";
      }
    }
    fifty.setAttribute("disabled", "disabled");
  }

  function callFriendFunc() {
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

  // !TIMER

  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 10;
  const ALERT_THRESHOLD = 5;

  const COLOR_CODES = {
    info: {
      color: "orange",
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD,
    },
    alert: {
      color: "orange",
      threshold: ALERT_THRESHOLD,
    },
  };

  const TIME_LIMIT = 31;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  let timerInterval = null;
  let remainingPathColor = COLOR_CODES.info.color;

  document.getElementById("timer").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

  startTimer();

  function onTimesUp() {
    clearInterval(timerInterval);
  }

  function resetTimer() {
    clearInterval(timerInterval);
    timePassed = 0;
    onTimesUp();
    startTimer();
  }

  function stopTimer() {
    clearInterval(timerInterval);
    timeLeft = 0;
    timePassed = 0;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      timeLeft = 0;
      timePassed = 0;
    }
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      document.getElementById("base-timer-label").innerHTML =
        formatTime(timeLeft);
      setCircleDasharray();
      setRemainingPathColor(timeLeft);

      if (timeLeft === 0) {
        onTimesUp();
        gameOver();
      }
    }, 1000);
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
  }

  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
})();
