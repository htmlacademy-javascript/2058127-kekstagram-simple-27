const uploadFormElement = document.querySelector('#upload-select-image');
const scaleSmallerButton = uploadFormElement.querySelector('.scale__control--smaller');
const scaleBiggerButton = uploadFormElement.querySelector('.scale__control--bigger');
const scaleValueButton = uploadFormElement.querySelector('.scale__control--value');
const imagePreviewContainer = uploadFormElement.querySelector('.img-upload__preview');
const imagePreviewElement = uploadFormElement.querySelector('.img-upload__preview img');
const sliderEffect = uploadFormElement.querySelector('.effect-level__slider');
const effectsList = uploadFormElement.querySelector('.effects__list');
const effectRangeValue = uploadFormElement.querySelector('.effect-level__value');

const setScale = (scale) => {
  if (scale > 100) { scale = 100; }
  if (scale < 25) { scale = 25; }
  scaleValueButton.value = `${scale}%`;
  imagePreviewContainer.style.transform = `scale(${scale / 100})`;
};

const setEffect = () => {
  const effectRadioElement = uploadFormElement.querySelector('.effects__radio:checked');
  const effect = effectRadioElement.value;
  const value = effectRangeValue.value;

  let filter = 'none';
  switch (effect) {
    case 'chrome':
      filter = `grayscale(${value / 100})`;
      break;

    case 'sepia':
      filter = `sepia(${value / 100})`;
      break;

    case 'marvin':
      filter = `invert(${value}%)`;
      break;

    case 'phobos':
      filter = `blur(${value / 100 * 3}px)`;
      break;

    case 'heat':
      filter = `brightness(${value / 100 * 2 + 1})`;
      break;
    default:
      break;
  }
  imagePreviewElement.style.filter = filter;
};

const initialSlider = () => {
  noUiSlider.create(sliderEffect, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    connect: 'lower',
    step: 0.1,
  });
  sliderEffect.noUiSlider.on('update', () => {

    effectRangeValue.value = sliderEffect.noUiSlider.get();
    setEffect();
  });

  return sliderEffect;
};

let slider;
const onChangeEffect = (evt) => {
  if (!slider) { slider = initialSlider(); }
  if (evt.target.value === 'marvin') {
    slider.noUiSlider.updateOptions({
      step: 1,
    });
  }
  else {
    slider.noUiSlider.updateOptions({
      step: 0.1
    });
  }
  slider.noUiSlider.set(100);
  if (evt.target.value === 'none') { slider.noUiSlider.destroy(); slider = null; }
  setEffect();
};

export const clearSlider = () => {
  slider.noUiSlider.destroy();
  slider = null;
};

scaleSmallerButton.addEventListener('click', () => {
  setScale(parseInt(scaleValueButton.value, 10) - 25);
});

scaleBiggerButton.addEventListener('click', () => {
  setScale(parseInt(scaleValueButton.value, 10) + 25);
});

effectsList.addEventListener('change', onChangeEffect);
