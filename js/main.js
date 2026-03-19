// DOM elements
const inputNumber = document.getElementById("input-number");
const squaredResult = document.getElementById("squared-result");
const cubedResult = document.getElementById("cubed-result");
const historyList = document.getElementById("history-list");
const errorMessage = document.getElementById("error-message");

// Buttons
const calcBtn = document.getElementById("calc-btn");
const deleteBtn = document.getElementById("delete-btn");
const clearBtn = document.getElementById("clear-btn");

// Event listeners
calcBtn.addEventListener("click", calculateResult);
deleteBtn.addEventListener("click", deleteLastEntry);
clearBtn.addEventListener("click", clearHistory);

// Press Enter to calculate
inputNumber.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    calculateResult();
  }
});

// Clear error when user starts typing
inputNumber.addEventListener("input", () => {
  if (errorMessage.textContent) {
    errorMessage.textContent = "";
  }
});

function calculateResult() {
  errorMessage.textContent = "";

  const rawValue = inputNumber.value.trim();
  
  if (rawValue === "") {
    errorMessage.textContent = "Please enter a number.";
    inputNumber.focus();
    return;
  }

  const userNum = Number(rawValue);
  
  if (isNaN(userNum)) {
    errorMessage.textContent = "Please enter a valid number.";
    inputNumber.focus();
    return;
  }

  const square = userNum * userNum;
  const cube = square * userNum; // or userNum ** 3

  squaredResult.textContent = square;
  cubedResult.textContent = cube;

  addHistoryItem(userNum, square, cube);

  inputNumber.value = "";
  inputNumber.focus();
}

function addHistoryItem(number, square, cube) {
  const listItem = document.createElement("li");
  listItem.className = "history-item";

  const numberSpan = document.createElement("span");
  numberSpan.className = "number";
  numberSpan.textContent = number;

  const detailsSpan = document.createElement("span");
  detailsSpan.className = "details";
  detailsSpan.textContent = ` → square: ${square}, cube: ${cube}`;

  listItem.appendChild(numberSpan);
  listItem.appendChild(detailsSpan);

  historyList.appendChild(listItem);

  // Auto-scroll to the newest entry
  const container = document.getElementById("history-container");
  container.scrollTop = container.scrollHeight;
}

function deleteLastEntry() {
  const lastItem = historyList.lastElementChild;
  if (lastItem) {
    historyList.removeChild(lastItem);
  } else {
    errorMessage.textContent = "No history entries to delete.";
    setTimeout(() => { errorMessage.textContent = ""; }, 2000);
  }
}

function clearHistory() {
  historyList.innerHTML = "";
  errorMessage.textContent = "";
}