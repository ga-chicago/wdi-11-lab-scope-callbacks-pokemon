// 1. iterate over each item in the array

let arrElements = tagMap.map((element) => {
	return element;
});
console.log(arrElements); 



// 2. Filter out all objects where the Language property 
// does not equal to en (stands for English)

const filteredArr = [];

for (let i = 0; i < arrElements.length; i++) {
	if (arrElements[i]["Language"] != "en") {
		filteredArr.push(arrElements[i]);
	}
}
console.log(filteredArr);

// 3.

// for (let i = 0; i < arrElements.length; i++) {
// 	for (prop in arrElements) {
// 		console.log("keys : " + arrElements[prop]);
// 	}
// }

// for (let i = 0; i < arrElements.length; i++) {
// 	for (prop in arrElements[i]) {
// 		console.log("values: " + arrElements[i][prop]);
// 	}
// }

const arrOfArrays = []

for (let i = 0; i < arrElements.length; i++) {
	arrOfArrays.push(Object.entries(arrElements[i]));
	// this gives me arrays for each object's key/value pairs
}

// commenting out console.log() because it clutters up console.
// I want y'all to be able to play my game, too. 
// remove comment on line 50 to verify my code.

for (let i = 0; i < arrOfArrays.length; i++) {
	// iterate through larger array, then through the array inside that
	for (let j = 0; j < arrOfArrays[i].length; j++) {
		// first element is the key, second is the value
		// console.log("key: " + arrOfArrays[i][j][0], "value: " + arrOfArrays[i][j][1]);
	}
}
