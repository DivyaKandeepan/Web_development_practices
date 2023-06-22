// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here
const fruits = [
    { name: 'apple', color: 'red', pricePerKg: 100.5 },
    { name: 'watermelon', color: 'green', pricePerKg: 30.5 },
    { name: 'mango', color: 'yellow', pricePerKg: 30 },
    { name: 'kiwi', color: 'brown', pricePerKg: 400 },
  ];
  
  const fruitMap = new Map();
  
  for (const fruit of fruits) {
    fruitMap.set(fruit.name, {
      color: fruit.color,
      pricePerKg: fruit.pricePerKg,
    });
  }
  
  // Now you can retrieve the properties of a fruit using its name
  const fruitName = 'mango';
  const fruitProperties = fruitMap.get(fruitName);
  
  console.log(fruitProperties);
  // Output: { color: 'red', pricePerKg: 2.5 }
  
