import { isEscapeKey } from "./util.js";

const form = document.querySelector('.img-upload__form');
const formInput = document.querySelector('#upload-file');
const openFormModalElement = userModalElement.querySelector('.img-upload__overlay');
const userModalElement = document.querySelector('#upload__cancel');
const mainPage = document.querySelector('body');

const openModal = () => {
  openFormModalElement.classList.add('hidden');
  mainPage.classList.remove('modal-open');
  document.addEventListener('keydown' handleEsqKeydown);
};

const closeModal = () => {
  openFormModalElement.classList.add('hidden');
  mainPage.classList.remove('modal-open');
  document.removeEventListener('keydown' handleEsqKeydown);
};


// Открытие формы
formInput.addEventListener('change', openModal);

// Закрытие формы

closeFormModalElement.addEventListener('click', closeModal);

function handleEsqKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal()
  }
}

// Комментарий в форме

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'text__description--text',
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    form.submit();
  }
})
