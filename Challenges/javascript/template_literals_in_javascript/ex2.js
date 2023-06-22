function convert(employee) {
    var username = employee.username;
    var age = employee.age;
  
    var templateString = `Name of user is ${username} and the age is ${age}`;
  
    return templateString;
  }
  
  // Example input
  var inputEmployee = { username: "aditya", age: 21 };
  
  // Calling the function and storing the result
  var result = convert(inputEmployee);
  
  // Printing the result
  console.log(result);
  