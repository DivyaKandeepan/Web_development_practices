var input = 10; // Example input, replace with user input

function fibonacciSeries(n) {
  var series = [];

  // First two numbers of the Fibonacci series
  var num1 = 0;
  var num2 = 1;

  // Add num1 and num2 to the series array
  series.push(num1);
  series.push(num2);

  // Generate the Fibonacci series
  for (var i = 2; i < n; i++) {
    var nextNum = num1 + num2;

    // Add the next number to the series array
    series.push(nextNum);

    // Update num1 and num2 for the next iteration
    num1 = num2;
    num2 = nextNum;
  }

  return series;
}

// Calling the function and storing the result
var result = fibonacciSeries(input);

// Printing the result
console.log(result.join(' '));
