module.exports.newArray = function(one, two, three, four) {
  var newArray = [one, two, three, four];
  return newArray;
}

module.exports.firstAndLast = function(array) {
  var lastElementIndex = array.length - 1;
  return [array[0], array[lastElementIndex]];
}
