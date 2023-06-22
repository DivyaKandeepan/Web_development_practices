const displayDetails = (employees) => {
    return employees.map((employee) => {
      return `${employee.username}:${employee.age}:${employee.salary}`;
    }).join(', ');
  };
  
  // Example input
  var empl = {
    username: "mohan",
    age: 21,
    salary: 50000
  };
  
  var emp2 = {
    username: "pankaj",
    age: 22,
    salary: 60000
  };
  
  var input = [empl, emp2];
  
  // Calling the arrow function and storing the result
  var result = displayDetails(input);
  
  // Printing the result
  console.log(result);
  