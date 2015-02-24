module.exports.favoriteNumber = function(fav, guess) {
  if (guess > fav) {
    return "Too high";
  }
  else if (guess < fav) {
    return "Too low";
  }
  else if (guess == fav) {
    return "You got it!";
  }
};

module.exports.checkLock = function(num1, num2, num3, num4) {
  if((num1 == 3 || num1 == 5 || num1 == 7) && (num2 == 2) && ((5 <= num3) && (num3 <= 100)) && ((num4 < 9) || (num4 > 20))) {
    return "correct";
  }
  else {
    return "incorrect";
  }
};

module.exports.canIGet = function(item, money) {
  if ((money >= 2499) && (item == "Mac Pro")) {
    return true;
  }
  else if ((money >= 1299) && (item == "MacBook Pro")) {
    return true;
  }
  else if ((money >= 999) && (item == "MacBook Air")) {
    return true;
  }
  else if ((money >= 1) && (item == "Apple Sticker")) {
    return true;
  }
  else {
    return false;
  }
};