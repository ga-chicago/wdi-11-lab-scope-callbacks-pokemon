console.log('test test')
console.log(tagMap[0]["Language"])
// 1. Iterate over each item in the array
// for(let i = 0; i < tagMap.length; i++){
// 			console.log(tagMap[i]);	
// }	

// 2. Filter out all objects where the Language property does not equal to en (stands for English)

function filterLanguage (query) {
	return tagMap.filter(filterLanguage(query)
}

let filteredList = tagMap.filter(filterLanguage('en'));

for(let i = 0; i < filteredList.length; i++){
			console.log(filteredList[i]);	
}

// 3. Loop over the filtered array and...

// 4. Output each array item's key and value

// Hint: Remember, this is an array of objects. This means you'll need to use both array methods and 
// object concepts to complete this. Also remember that some methods return new copies of arrays instead 
// of changing their values in place