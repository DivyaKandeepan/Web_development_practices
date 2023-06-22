function findSecondShortestNumber(numbers) {
    // Sort the array in ascending order
    var sortedArray = numbers.sort(function(a, b) {
      return a - b;
    });
  
    // Retrieve the second element from the sorted array
    var secondShortestNumber = sortedArray[1];
  
    // Return the second shortest number
    return secondShortestNumber;
  }
  
  // Example input
  var numbers = [4, 1, 2, 3];
  
  // Call the function and store the result
  var secondShortest = findSecondShortestNumber(numbers);
  
  // Print the result
  console.log("Second Shortest number =", secondShortest);
  