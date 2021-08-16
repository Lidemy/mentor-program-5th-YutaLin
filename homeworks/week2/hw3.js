function reverse(str) {
	var output = ""
 	for (i=str.length-1; i>=0; i--) {
 		output += str[i]
 	}

 	console.log(output)
}

reverse('yoyoyo');
