module.exports.stream = function(conditionalFn, actionFn) {
	while (conditionalFn()) {
		actionFn();
	}
}

module.exports.sumNumbers = function(array) {
	sum = 0;
	i = 0;
	while (i < array.length) {
		sum = array[i] + sum;
	}
	return sum;
}

