function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
getRandomIntInclusive(1, 100);

function maxLength(str, max) {
  if (str.length > max) {
    return false;
  } else {
    return true;
  }
}
maxLength('Строка', 10);
