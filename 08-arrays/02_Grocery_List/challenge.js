module.exports.addItem = function(item, listArray) {
  if (listArray.indexOf(item)) {
    listArray.push(item);
  }
  return listArray;
}

module.exports.reverseSortedList = function(array) {
  return array.sort().reverse();
}