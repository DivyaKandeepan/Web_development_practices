function calculateSumWithVar(num) {
    var result = '';
    var sum = 0;
  
    for (var i = 1; i <= num; i++) {
      sum += i;
      result += i;
  
      if (i !== num) {
        result += '-';
      }
    }
  
    result += '=' + sum;
  
    return result;
  }
  
  // Example input
  var inputNum2 = 4;
  
  // Calling the function and storing the result
  var output2 = calculateSumWithVar(inputNum2);
  
  // Printing the result
  console.log('result: ' + output2);
  