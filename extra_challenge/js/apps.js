console.log('test test')
console.log(tagMap[0]["Language"])
// 1. Iterate over each item in the array
// for(let i = 0; i < tagMap.length; i++){
// 			console.log(tagMap[i]);	
// }	

// 2. Filter out all objects where the Language property does not equal to en (stands for English)

let filteredList = [];

for(let i = 0; i < tagMap.length; i++){
	if(tagMap[i]["Language"] === 'en'){
		console.log(filteredList.concat(tagMap[i]));	
	}
}

// 3. Loop over the filtered array and...
// 4. Output each array item's key and value

//AG NOTE ---> I think my above code block completes 3 & 4 also?