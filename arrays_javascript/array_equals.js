function checkArraysEquality(array1, array2) {
    // Check if the lengths of the arrays are equal
    if (array1.length !== array2.length) {
      return false;
    }
  
    // Iterate over the elements of the first array
    for (var i = 0; i < array1.length; i++) {
      // Check if the current elements and indexes are not equal
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example input
  var array1 = [1, 2, 3, 4];
  var array2 = [1, 2, 3, 5];
  
  // Calling the function and storing the result
  var result = checkArraysEquality(array1, array2);
  
  // Printing the result
  console.log(result);
  