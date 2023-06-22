/* Write a Program to Flatten a given n-dimensional array */

const flatten = (array) => {
	if (!Array.isArray(array)) {
	  return null;
	}
  
	const flattened = [];
  
	const flattenHelper = (arr) => {
	  for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
		  flattenHelper(arr[i]);
		} else {
		  flattened.push(arr[i]);
		}
	  }
	};
  
	flattenHelper(array);
  
	return flattened;
  };
  
 
  
module.exports = flatten;
