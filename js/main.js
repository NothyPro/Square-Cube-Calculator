//create references to elements
const inputNumber = document.getElementById("input-number");
const squaredResult = document.getElementById("squared-result");
const cubedResult = document.getElementById("cubed-result");
const historyContainer = document.getElementById("history-container");

//create event listeners
document.getElementById("calc-btn").addEventListener("click", calculateResult);

document.getElementById("delete-btn").addEventListener("click", deleteLastEntry);

document.getElementById("clear-btn").addEventListener("click", clearHistory);


//function to run when I click calculate button
function calculateResult() {
  console.log("calculate");
  //I need the number that the user input
  let userNum = inputNumber.value;
  console.log("userNum ", userNum);

  //calculate the square of the userNum
  let square = userNum * userNum;
  console.log("square", square);

  //Now I have the square, what do I do with it?
  squaredResult.innerText = square;
  // squaredResult.innerHTML = `<strong>${square}</strong>`; (diff between innerText and innerHTML)

  //calculate the square of the userNum
  let cube = square * userNum;

  //Now I have the cube, what do I do with it?
  cubedResult.innerText = cube;

  //I want to add the input number to the history section
  //I want to add a p tag with number
  //create a p element
  //   let newNumber = document.createElement("p");
  //   //<p></p> this is what I created
  //   // Now to add content to it
  //   newNumber.innerText = userNum;
  //   //add this to the div
  //   historyContainer.appendChild(newNumber);

  //alternate method
  historyContainer.innerHTML += `<p>${userNum}</p>`;



  //clear the input box (do the right steps at the right place/time)
  inputNumber.value = "";
}


// create a function for clear history
function clearHistory(){
    console.log('clear');
    historyContainer.innerHTML = '';

}

//create a function for delete last entry
function deleteLastEntry(){
    console.log('delete');
    //I need the last element of the history container
    let lastEntry = historyContainer.lastElementChild;
    console.log('lastEntry', lastEntry);
    if(lastEntry) {
        historyContainer.removeChild(lastEntry);
    }

}