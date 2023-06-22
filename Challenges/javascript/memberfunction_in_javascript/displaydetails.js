function displayDetails(employee) {
    var details = [];
    details.push(employee.username);
    details.push(employee.age);
    details.push(employee.salary);
  
    return details.join(", ");
  }
  
  // Example input
  var employee = {
    username: "mohan",
    salary: 50000,
    age: 21
  };
  
  // Calling the function and storing the result
  var result = displayDetails(employee);
  
  // Printing the result
  console.log(result);
  