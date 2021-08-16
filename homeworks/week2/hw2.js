function capitalize(str) {
	var output = ""

	for (i=0;i<str.length; i++) {
		if (i === 0) {
			var firstCharCode = str[0].charCodeAt()
			if (firstCharCode <= 122 && firstCharCode >= 97) {
				var capitalizeCharCode = firstCharCode - 32 
				var capitalizeChar = String.fromCharCode(capitalizeCharCode)
				output += capitalizeChar
			} else {
				output += str[i]
			}  
		} else {
			output += str[i]
		} 
	}

	return output
}

console.log(capitalize('hello'));
