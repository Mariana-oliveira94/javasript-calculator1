// Get the display element
const displayElement = document.getElementById("calculator_display");

// Function to display input on the calculator screen
function display(input) {
  // Append the clicked value to the display
  displayElement.value += input;
}

// Function to clear the display
function clearDisplay() {
  displayElement.value = ""; // Clear the current value in the display
}

// Function to calculate and display the result
function calculate() {
  let expression = displayElement.value;
  let num = 0
  let result = 0;
  let currentOperator = '+';

  for(let i = 0; i < expression.length; i++) {
    let character = expression [i];

    

}
}