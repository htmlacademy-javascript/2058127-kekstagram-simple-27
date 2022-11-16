const templateElement = document.querySelector('#picture').content.querySelector('.picture');


export function createPicture(data) {
  const pictureElement = templateElement.cloneNode(true);
  const imageElement = pictureElement.querySelector('.picture__img');
  const commenElement = pictureElement.querySelector('.picture__comments');
  const likesElement = pictureElement.querySelector('.picture__likes');

  imageElement.src = data.url;
  commenElement.textContent = data.comments;
  likesElement.textContent = data.likes;

  return pictureElement;
}
