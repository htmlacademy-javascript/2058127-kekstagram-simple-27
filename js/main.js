import { resultArray } from './data.js';
import { createPicture } from './picture.js';
import './modal.js';
import './pictures-editor.js';
//import { createLoader } from './load.js';

// console.log(resultArray);
const containerPictures = document.querySelector('.pictures');
const fragmentPictures = document.createDocumentFragment();

resultArray.forEach((picData) => {
  fragmentPictures.append(createPicture(picData));
});

containerPictures.append(fragmentPictures);

/*const loadAnimals = createLoader(console.log(), console.error());

loadAnimals();*/


