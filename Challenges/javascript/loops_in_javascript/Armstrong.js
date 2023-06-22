var input = 153; // Example input, replace with user input

function isArmstrongNumber(num) {
  var sum = 0;
  var temp = num;
  var length = num.toString().length;

  while (temp > 0) {
    var digit = temp % 10;
    sum += Math.pow(digit, length);
    temp = Math.floor(temp / 10);
  }

  return sum === num;
}

// Calling the function and storing the result
var result = isArmstrongNumber(input);

// Printing the result
console.log(result);
