const funct = (element) => {
	if (element.Language === "en") {
		return true;
	}
	else {
		return false;
	}
}

let englishMap = [];
for (let object of tagMap) {
	englishMap = tagMap.filter(funct,object);
}

for (let i in englishMap) {
	console.log(i,englishMap[i]);
}