import {getRandomPositiveInteger} from './util.js';

let indexID = 0;


const createId = function () {
  indexID++;
  return indexID;
};


export function createPhoto() {
  return {
    id: createId(),
    url: `./photos/${indexID}.jpg`,
    description: 'Описание фотографии',
    likes: getRandomPositiveInteger(15, 200),
    comments: getRandomPositiveInteger(15, 200),
  };
}

export const resultArray = Array.from({ length: 25 }, createPhoto);
