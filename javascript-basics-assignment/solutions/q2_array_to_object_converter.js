/* Write a Program to convert an array of objects to an object
	based on a given key */


	const convert = (array, key) => {
		if (!Array.isArray(array) || typeof key !== 'string') {
		  return null;
		}
	  
		const convertedObject = {};
	  
		for (let i = 0; i < array.length; i++) {
		  const item = array[i];
		  if (typeof item === 'object' && item !== null && item.hasOwnProperty(key)) {
			const keyValue = item[key];
			convertedObject[keyValue] = item;
		  }
		}
	  
		return convertedObject;
	  };
	  
	  module.exports = convert;
	  

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }

convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'value')

		{
			"abc":{id: 1, value: 'abc'},
			"xyz" :{id: 2, value: 'xyz'}
		}

*/

module.exports = convert;
