function checkLength(checkString, maxLength) {
  return checkString.length < maxLength;
}

checkLength('Проверяемая строка', 100);


function getRandomNumber(min, max) {
  const lower = min;
  const upper = max;
  const random = Math.random();
  return Math.floor(random * (upper - lower + 1) + lower);
}

getRandomNumber(20, 140);

function getRandomPositiveInteger(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength(string, length) {
  return string.length <= length;
}

/*id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

description, строка — описание фотографии. Описание придумайте самостоятельно.

likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

comments, число — количество комментариев, оставленных другими пользователями к этой фотографии. Случайное число от 0 до 200. */

console.log() {
  const id = getRandomPositiveInteger(0, 25);
  const url = photos / getRandomPositiveInteger(0, 25).jpg;
  const string = String(getRandomPositiveInteger(0, 25));
  const likes = getRandomPositiveInteger(15, 200);
  const comments = getRandomPositiveInteger(0, 200);
}

/* Вторая карточка

console.log() {
  const id = getRandomPositiveInteger(0, 25);
  const url = photos / getRandomPositiveInteger(0, 25).jpg;
  const string = String(getRandomPositiveInteger(0, 25));
  const likes = getRandomPositiveInteger(15, 200);
  const comments = getRandomPositiveInteger(0, 200);
} */
