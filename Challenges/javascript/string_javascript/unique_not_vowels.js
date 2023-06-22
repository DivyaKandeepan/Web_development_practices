function countUniqueConsonants(input) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var consonants = {};
  
    // Convert input to lowercase
    var lowercaseInput = input.toLowerCase();
  
    // Iterate over each character in the input string
    for (var i = 0; i < lowercaseInput.length; i++) {
      var char = lowercaseInput[i];
  
      // Check if the character is a consonant and not a vowel
      if (!vowels.includes(char) && char.match(/[a-z]/i)) {
        consonants[char] = true;
      }
    }
  
    // Count the number of unique consonants
    var count = Object.keys(consonants).length;
  
    return count;
  }
  
  // Example input
  var inputString = 'kolkata';
  
  // Calling the function and storing the result
  var result = countUniqueConsonants(inputString);
  
  // Printing the result
  console.log(result);
  