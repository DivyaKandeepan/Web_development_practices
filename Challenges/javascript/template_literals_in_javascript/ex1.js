function convert(product) {
    var name = product.name;
    var price = product.price;
  
    var templateString = `Name of product is ${name} and the price of product is ${price}$`;
  
    return templateString;
  }
  
  // Example input
  var inputProduct = { name: "samsung", price: 3000 };
  
  // Calling the function and storing the result
  var result = convert(inputProduct);
  
  // Printing the result
  console.log(result);
  