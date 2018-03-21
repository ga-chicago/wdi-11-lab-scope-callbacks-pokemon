console.log('test test')
console.log(tagMap[0]["Language"])
// 1. Iterate over each item in the array
// for(let i = 0; i < tagMap.length; i++){
// 			console.log(tagMap[i]);	
// }	

// 2. Filter out all objects where the Language property does not equal to en (stands for English)

// function filterLanguage (language) {

// 	return language === tag.Map.length tagMap[i][Language]

// 	tagMap[i.filter(filterLanguage(query)
// }

let filteredList = [];

for(let i = 0; i < tagMap.length; i++){
	if(tagMap[i]["Language"] === 'en'){
		console.log(filteredList.push(tagMap[i]));	
	}
}

// 3. Loop over the filtered array and...

// 4. Output each array item's key and value

// Hint: Remember, this is an array of objects. This means you'll need to use both array methods and 
// object concepts to complete this. Also remember that some methods return new copies of arrays instead 
// of changing their values in place