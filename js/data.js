let indexID = 0;
function getRandomPositiveInteger(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const createId = function () {
  indexID++;
  return indexID;
};


function createPhoto() {
  return {
    id: createId(),
    url: 'photos / { indexID }.jpg',
    description: 'Описание фотографии',
    likes: getRandomPositiveInteger(15, 200),
    comments: getRandomPositiveInteger(15, 200),
  };
}

const resultArray = Array.from({ length: 25 }, createPhoto);

resultArray();
