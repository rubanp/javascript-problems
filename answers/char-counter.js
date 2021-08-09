function countChar(string, char) {
	let totalChars = 0;
	for (let i = 0; i<string.length; i++) {
		if (string[i]===char) {totalChars++};
	}
	console.log(totalChars);
}

countChar("hello world", "o");
countChar("hello world", "b");
