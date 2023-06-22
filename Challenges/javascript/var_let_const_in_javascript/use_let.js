function calculateSumWithLet(num) {
    let result = '';
    let sum = 0;
  
    for (let i = 1; i <= num; i++) {
      sum += i;
      result += i;
  
      if (i !== num) {
        result += '+';
      }
    }
  
    result += '=' + sum;
  
    return result;
  }
  
  // Example input
  let inputNum1 = 4;
  
  // Calling the function and storing the result
  let output1 = calculateSumWithLet(inputNum1);
  
  // Printing the result
  console.log('result: ' + output1);
  