let num1 = "";
let num2 = "";
let sign = "";
let result = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "x", "/", "%", "+/-"];

const out = document.querySelector(".calc-display");

function clearAll() {
  num1 = "";
  num2 = "";
  sign = "";
  result = false;
  out.textContent = 0;
}
document.querySelector(".clearAll").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
  if (!event.target.classList.contains("btn")) return;
  if (event.target.classList.contains("clearAll")) return;

  out.textContent = "";

  const key = event.target.textContent;
  // От 1 до 9
  if (digit.includes(key)) {
    if (num2 === "" && sign === "") {
      num1 += key;
      out.textContent = num1;
    } else if (num1 !== "" && num2 !== "" && result) {
      num2 = key;
      result = false;
      out.textContent = num2;
    } else {
      num2 += key;
      out.textContent = num2;
    }
    return;
  }

  //знак
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    return;
  }

  if (key === "=") {
    if (num2 === "") b = num1;
    switch (sign) {
      case "+":
        num1 = +num1 + +num2;
        break;
      case "-":
        num1 = +num1 - +num2;
        break;
      case "x":
        num1 = +num1 * +num2;
        break;
      case "/":
        if (num2 === "0") {
          out.textContent = "Error";
          a = "";
          b = "";
          sign = "";
          return;
        }
        num1 = +num1 / +num2;
        break;
      case "+/-":
        num1 = num1 * -1;
        break;
      case "%":
        num1 = num1 / 100;
        break;
    }
    result = true;
    out.textContent = num1;
  }
};
