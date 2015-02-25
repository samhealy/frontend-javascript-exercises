module.exports.copy = function(object) {
	var newObject = {};
	for (var key in object) {
		newObject[key] = object[key];
	}
	return newObject;
}

module.exports.extend = function(dest, src) {
	for (var key in src) {
    	dest[key] = src[key];
  	}
  	return dest;
}
// object = { name: "Computer", cost: "$1,000" };
module.exports.hasElems = function(object, elementArray) {
	counter = 0
	for (var position in elementArray) {
		if (object.hasOwnProperty(elementArray[position])){
			counter++
		}
	}
	if (counter >= elementArray.length) {
		return true
	}
	else {
		return false
	}
}
