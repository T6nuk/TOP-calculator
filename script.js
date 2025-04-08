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
  let btnNumbers = document.querySelectorAll(".button-numbers > div > button");
  let btnOperators = document.querySelectorAll(".button-operators > button");
  let btnResult = document.querySelector("#button-equals");
  let btnClear = document.querySelector("#button-clear");

  let calcState = {
    firstNum: [],
    secondNum: [],
    operator: "",
    answer: "",
    shouldClear: false,
  };

  function updateScreen(content) {
    screen.textContent = content;
  }

  btnNumbers.forEach((button) => {
    button.addEventListener("click", () => {
      let pressedBtn = "";
      let btnContent = button.textContent;
      pressedBtn = btnContent;

      // clear screen
      if (calcState.shouldClear) {
        updateScreen("");
        calcState.shouldClear = false;
      }

      if (calcState.operator === "") {
        if (btnContent === "." && calcState.firstNum.includes(".")) {
          return;
        }
        calcState.firstNum.push(pressedBtn);
      } else if (btnContent === "." && calcState.secondNum.includes(".")) {
        return;
      } else calcState.secondNum.push(pressedBtn);
      updateScreen(screen.textContent + pressedBtn);

      return pressedBtn;
    });
  });

  btnOperators.forEach((button) => {
    button.addEventListener("click", () => {
      if (calcState.operator !== "") return;
      if (calcState.answer != "") {
        calcState.firstNum = [String(calcState.answer)];
      }
      calcState.answer = "";

      let pressedBtn = button.textContent;
      calcState.operator = pressedBtn;
      updateScreen(screen.textContent + calcState.operator);
    });
  });

  btnResult.addEventListener("click", () => {
    let num1 = parseFloat(calcState.firstNum.join(""));
    let num2 = parseFloat(calcState.secondNum.join(""));
    let result = operate(calcState.operator, num1, num2);

    calcState.answer = result;
    updateScreen(calcState.answer);

    calcState.shouldClear = true;
    calcState.firstNum = [];
    calcState.secondNum = [];
    calcState.operator = "";
  });

  btnClear.addEventListener("click", () => {
    calcState.firstNum = [];
    calcState.secondNum = [];
    calcState.operator = "";
    updateScreen("");
    calcState.answer = "";
  });
}

populateDisplay();
