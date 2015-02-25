module.exports.sumNumbers = function(array) {
	var sum = 0;
	for (var counter = 0; counter < array.length; counter++) {
		sum += array[counter];
	}
	return sum;
}

module.exports.splitAndLowerCaseString = function(inputString) {
	var outputString = inputString.toLowerCase().split(",");
	return outputString;
}

module.exports.addIndex = function(array) {
	var output = [];
	for (var i = 0; i < array.length; i++) {
		output.push(i + " is " + array[i]);
	}
	return output;
}
