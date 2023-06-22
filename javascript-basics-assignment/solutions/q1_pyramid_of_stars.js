/* Write a program to build a `Pyramid of stars` of given height */
const buildPyramid = (height) => {
  // Check if the height is a positive or negative integer
  if (typeof height !== 'number' || !Number.isInteger(height) || height <= 0) {
    console.log('Height must be a positive or negative integer.');
    return '';
  }

  var stars = '';

  // Outer loop for each row of the pyramid
  for (var i = 1; i <= height; i++) {
    // Inner loop for adding spaces before the stars
    for (var k = 1; k <= height - i + 1; k++) {
      stars += ' ';
    }

    // Inner loop for adding stars
    for (var j = 1; j <= i; j++) {
      stars += '* ';
    }

    // Add a new line character to move to the next row
    stars = stars + ' \n';
  }

  return stars;
};



module.exports = buildPyramid;


/* For example,
INPUT - buildPyramid(6)
OUTPUT -
  *
 * *
* * *
* * * *
* * * * *
* * * * * *

*/
