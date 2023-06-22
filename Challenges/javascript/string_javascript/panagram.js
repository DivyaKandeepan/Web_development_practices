function isPanagram(input) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
    // Convert input to lowercase
    var lowercaseInput = input.toLowerCase();
  
    for (var i = 0; i < alphabet.length; i++) {
      var char = alphabet[i];
  
      if (!lowercaseInput.includes(char)) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example input
  var inputText = 'aaaabbbcdefghijklmnopqrstuvwxyzzzz';
  
  // Calling the function and storing the result
  var result = isPanagram(inputText);
  
  // Printing the result
  console.log(result);
  