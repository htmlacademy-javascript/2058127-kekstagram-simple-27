let indexID = 0;

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
