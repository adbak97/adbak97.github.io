function odwroc(string) {
	var splitString = string.split('');
	var reverseString = splitString.reverse();
	var endString = reverseString.join('');
	console.log(endString);
	return endString;
}

odwroc("akademia108");
