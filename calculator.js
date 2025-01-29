function updateDateTime() {
            let now = new Date();
            let formattedDate = now.toLocaleString(); // Get local date and time
            document.getElementById("datetime").innerText = formattedDate;
        }

        updateDateTime(); // Run immediately
        setInterval(updateDateTime, 1000); // Update every second
// Perform arithmetic operations
function performOperation(operation) {
  // Get input values
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  // Check if inputs are valid
  if (isNaN(num1) || isNaN(num2)) {
    alert('Please enter valid numbers!');
    return;
  }

  // Variable to store result
  let result;

  // Perform the selected operation
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        alert('Error: Division by zero!');
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert('Invalid operation!');
      return;
  }

  // Display the result
  document.getElementById('result').innerText = result;
}
