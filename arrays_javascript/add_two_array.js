function addArrays(array1, array2) {
    // join the two arrays using the spread operator
    var combinedArray = [...array1, ...array2];
  
    // Create a new Set from the combined array to remove duplicate elements
    var uniqueSet = new Set(combinedArray);
  
    // Convert the Set back to an array using the spread operator
    var finalArray = [...uniqueSet];
  
    return finalArray;
  }
  
  // Example input
  var array1 = [1, 2, 3, 4];
  var array2 = [3, 4, 5, 6];
  
  // Calling the function and storing the result
  var result = addArrays(array1, array2);
  
  // Printing the result
  console.log(result);
  