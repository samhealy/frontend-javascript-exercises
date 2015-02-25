module.exports.getKeys = function(object) {
	var array = [];
	for (var key in object) {
		array.push(key);
	}
	return array;
}

module.exports.getValues = function(object) {
	var array = [];
	for (var value in object) {
		array.push(object[value]);
	}
	return array; 
}

module.exports.objectToArray = function(object) {
	var array = [];
	for (var key in object) {
		array.push(key + " is " + object[key]);
	}
	return array;
}