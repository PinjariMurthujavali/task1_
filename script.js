// Appends the clicked button value to the display
function appendValue(val) {
  // Get the display input and add the clicked value to its current value
  document.getElementById("display").value += val;
}

// Clears the calculator display
function clearDisplay() {
  // Reset the display input to an empty string
  document.getElementById("display").value = "";
}

// Calculates the result of the expression shown in the display
function calculateResult() {
  try {
    // Evaluate the expression in the display using eval()
    let result = eval(document.getElementById("display").value);

    // Show the result in the display
    document.getElementById("display").value = result;
  } catch (error) {
    // If there is an error (invalid expression), display "Error"
    document.getElementById("display").value = "Error";
  }
}
