const G = 'Green'; // Green
const R = 'Red'; // Red
const B = 'Blue'; // Blue

function displayValue(color) {
  if (color === G) {
    return 'green garden';
  } else if (color === R) {
    return 'red rose';
  } else if (color === B) {
    return 'blue rose';
  } else {
    return 'unsupported color';
  }
}

// Example input
let inputColor = 'Red';

// Calling the function and storing the result
let output = displayValue(inputColor);

// Printing the result
console.log(output);
