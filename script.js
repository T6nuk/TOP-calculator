console.log(`test`);

// add

const add = function (a, b) {
  return a + b;
};

// subtract

const subtract = function (a, b) {
  return a - b;
};

// multiply

const multiply = function (a, b) {
  return a * b;
};

// divide

const divide = function (a, b) {
  return a / b;
};

const num1 = null;
const num2 = null;
const operator = null;

const operate = function (operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      break;
  }
};

function populateDisplay() {
  let screen = document.querySelector("#screen");
  let btnAll = document.querySelectorAll("#calc-buttons");
  let btnNumbers = document.querySelectorAll(".button-numbers > button");
  let btnOperators = document.querySelectorAll(".button-operators > button");
  let btnResult = document.querySelector("#button-equals");
  let firstNum = [];
  let secondNum = [];
  let operator = "";

  let btnNumbersValue = btnNumbers.forEach((button) => {
    button.addEventListener("click", () => {
      let pressedBtn = Number(button.textContent);
      screen.textContent = pressedBtn;

      if (operator == "") firstNum.push(pressedBtn);
      else secondNum.push(pressedBtn);
      return pressedBtn;
    });
  });

  let btnOperatorsValue = btnOperators.forEach((button) => {
    button.addEventListener("click", () => {
      let pressedBtn = button.textContent;
      screen.textContent = pressedBtn;
      operator = pressedBtn;
    });
  });

  let getResult = btnResult.addEventListener("click", () => {
    let num1 = firstNum[firstNum.length - 1];
    let num2 = secondNum[secondNum.length - 1];
    console.log(num1);
    console.log(operator);
    console.log(num2);

    let result = operate(operator, num1, num2);
    console.log(result);

    screen.textContent = result;
    firstNum = [];
    secondNum = [];
    operator = "";
  });
}

populateDisplay();
