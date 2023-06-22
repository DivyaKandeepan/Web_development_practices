function convert(input) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var result = '';
  
    for (var i = 0; i < input.length; i++) {
      var char = input[i];
  
      if (vowels.includes(char)) {
        result += 'b';
      } else {
        result += char;
      }
    }
  
    return result;
  }
  
  // Example input
  var inputString = 'mumbai';
  
  // Calling the function and storing the result
  var result = convert(inputString);
  
  // Printing the result
  console.log(result);
  