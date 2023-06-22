
/*
The drawPattern() function should accept number of rows as input.
The function should return string that contains the pyramid structure for the number of rows inputted.
The pyramid structure should have the following pattern:
        *
       * *
      * * *
     * * * *
    * * * * *
The function should return error message "Invalid Input Type, Row Input Should Be of Type Number !!", 
if non-numeric value is passed to the function.
*/
module.exports = function drawPattern(rows) {
  // Check if the rows input is of type number
  if (typeof rows !== "number") {
    return "Invalid Input Type, Row Input Should Be of Type Number !!";
  }

  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    // Add spaces before each row
    for (let j = 1; j <= rows - i; j++) {
      pattern += " ";
    }

    // Add asterisks for each row
    for (let k = 1; k <= i; k++) {
      pattern += "* ";
    }

    // Add a new line character after each row
    pattern += "\n";
  }

  return pattern;
};