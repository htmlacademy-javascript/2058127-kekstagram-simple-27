function checkLength(checkString, maxLength)
{
  return checkString.length < maxLength;
}

checkLength('Проверяемая строка', 100);


function getRandomNumber (min, max)
{
  const lower = min;
  const upper = max;
  const random = Math.random();
  return Math.floor(random * (upper - lower + 1) + lower);
}

getRandomNumber (20, 140);
