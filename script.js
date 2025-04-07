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
  if (b == 0) {
    return "NOPE";
  } else return a / b;
};

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
  let btnNumbers = document.querySelectorAll(".button-numbers > button");
  let btnOperators = document.querySelectorAll(".button-operators > button");
  let btnResult = document.querySelector("#button-equals");
  let btnClear = document.querySelector("#button-clear");
  let firstNum = [];
  let secondNum = [];
  let operator = "";

  btnNumbers.forEach((button) => {
    button.addEventListener("click", () => {
      let pressedBtn = "";
      btnContent = button.textContent;
      pressedBtn = btnContent;
      //   console.log(`pressed button value ${pressedBtn}`);

      if (operator === "") {
        if (btnContent === "." && firstNum.includes(".")) {
          return;
        }
        firstNum.push(pressedBtn);
      } else if (btnContent === "." && secondNum.includes(".")) {
        return;
      } else secondNum.push(pressedBtn);

      //   if (btnContent != ".") pressedBtn = Number(btnContent);
      screen.textContent += pressedBtn;

      console.log(`num1 ${firstNum}`);

      console.log(`num2 ${secondNum}`);

      return pressedBtn;
    });
  });

  btnOperators.forEach((button) => {
    button.addEventListener("click", () => {
      let pressedBtn = button.textContent;
      operator = pressedBtn;
      screen.textContent += operator;
    });
  });

  btnResult.addEventListener("click", () => {
    console.log("screen content" + screen.textContent);

    let num1 = parseFloat(firstNum.join(""));
    let num2 = parseFloat(secondNum.join(""));

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
