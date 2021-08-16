function join(arr, concatStr) {
	var output = ""
	for (i=0;i<arr.length;i++) {
		output += arr[i]
		if (i != (arr.length - 1)) {
			output += concatStr
			
		}
	}

	return output
}

function repeat(str, times) {
  var output = ""
  for (i=0;i<times;i++) {
  	output += str
  }
  return output
}

console.log(join(["a", 1, "b", 2, "c", 3], ','));
console.log(repeat('a', 5));
