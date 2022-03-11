let runningTotal = 0;
let currentNum = 0;
let previousNum = 0;
let operator = "";

let displayNum = document.querySelector(".display-num");
let runningTotalDisplay = document.querySelector(".runningTotal");
let currentNumDisplay = document.querySelector(".currentNum");
let previousNumDisplay = document.querySelector(".previousNum");
let operatorDisplay = document.querySelector(".operator");

const numButtons = Array.from(
  document.querySelectorAll(".num-container > div")
);
numButtons.forEach((numButton) =>
  numButton.addEventListener("mousedown", numButtonPressed)
);

const opButtons = Array.from(document.querySelectorAll(".op-container > div"));
opButtons.forEach((opButton) =>
  opButton.addEventListener("mousedown", opButtonPressed)
);

const eqButton = document.querySelector(".equals");
eqButton.addEventListener("mousedown", eqButtonPressed);

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("mousedown", clearButtonPressed);

function numButtonPressed(e) {
  if (currentNum == "0") {
    currentNum = e.target.innerText;
    displayNum.textContent = currentNum;
    updateVariableDisplay();
  } else {
    console.log(previousNum)
    currentNum = e.target.innerText;
    displayNum.textContent = displayNum.textContent + currentNum;
    currentNum = parseInt(displayNum.textContent);
    updateVariableDisplay();
  }
}

function opButtonPressed(e) {
  if (operator == "+" ){
  runningTotal = parseInt(runningTotal)  + parseInt(currentNum);
  } else if (operator == "-"){
    runningTotal = parseInt(runningTotal) - parseInt(currentNum); 
  } else if (operator == "*"){
    runningTotal = parseInt(runningTotal) * parseInt(currentNum);
  } else if (operator == "/"){
    runningTotal = parseInt(runningTotal) / parseInt(currentNum);
  } else if (operator == "") {
    runningTotal = currentNum;
  }
  runningTotal = Math.round(runningTotal * 100)/100;
  operator = e.target.innerText;
  displayNum.textContent = runningTotal;
  previousNum = currentNum;
  currentNum = 0;
  updateVariableDisplay();
}

function eqButtonPressed() {
  if (operator == "+") {
    runningTotal = runningTotal + parseInt(displayNum.textContent);
  } else if (operator == "-") {
    runningTotal = runningTotal - parseInt(displayNum.textContent);
  } else if (operator == "*") {
    runningTotal = runningTotal * parseInt(displayNum.textContent);
  } else if (operator == "/") {
    runningTotal = runningTotal / parseInt(displayNum.textContent);
  }
  runningTotal = Math.round(runningTotal * 100)/100;
  displayNum.textContent = runningTotal;
  operator = "";
  runningTotal = 0;
  currentNum = 0;
  previousNum = 0;
  updateVariableDisplay();
}

function clearButtonPressed() {
  displayNum.textContent = 0;
  operator = "";
  runningTotal = 0;
  currentNum = 0;
  previousNum = 0;
  updateVariableDisplay();
}

function updateVariableDisplay() {
  operatorDisplay.textContent = "Operator: " + operator;
  runningTotalDisplay.textContent = "runningTotal: " + runningTotal;
  currentNumDisplay.textContent = "currentNum: " + currentNum;
  previousNumDisplay.textContent = "previousNum: " + previousNum;
}
