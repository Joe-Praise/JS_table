const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
function getNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCal, currentInput) {
  const calcDescription = `${resultBeforeCal} ${operator} ${currentInput}`;
  outputResult(currentResult, calcDescription);
}

function WriteToLog(operationKey, prevResult, operationNumber, newResult ) {
  const logEntry = {
    operation: operationKey,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  }
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber);
  WriteToLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  WriteToLog("SUBTRACT", initialResult, enteredNumber, currentResult);

}

function multiply() { 
  const enteredNumber = getNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  WriteToLog("MULTIPLY", initialResult, enteredNumber, currentResult);

}

function divide() { 
  const enteredNumber = getNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  WriteToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
