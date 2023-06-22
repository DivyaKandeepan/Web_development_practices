function displayCustomers(customers) {
    var output = "";
    for (var i = 0; i < customers.length; i++) {
      output += customers[i].username + ": " + customers[i].age;
      if (i !== customers.length - 1) {
        output += ", ";
      }
    }
    return output;
  }
  
  // Example input
  var customers = [
    { username: "chetan", age: 22 },
    { username: "pankaj", age: 23 }
  ];
  
  // Calling the function and storing the result
  var result = displayCustomers(customers);
  
  // Printing the result
  console.log(result);
  