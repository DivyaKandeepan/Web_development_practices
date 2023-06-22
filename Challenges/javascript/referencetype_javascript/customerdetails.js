function displayDetails(customer) {
  var output = customer.username + ": " + customer.age;
  return output;
}

// Example input
var customer = {
  username: "chetan",
  age: 21
};

// Calling the function and storing the result
var result = displayDetails(customer);

// Printing the result
console.log(result);
