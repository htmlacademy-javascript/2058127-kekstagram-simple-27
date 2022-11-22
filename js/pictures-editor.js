const uploadFormElement = document.querySelector('#upload-select-image');
const scaleSmallerButton = uploadFormElement.querySelector('.scale__control--smaller');
const scaleBiggerButton = uploadFormElement.querySelector('.scale__control--bigger');
const scaleValueButton = uploadFormElement.querySelector('.scale__control--value');
const imagePreviewContainer = uploadFormElement.querySelector('.img-upload__preview');
const imagePreviewElement = uploadFormElement.querySelector('.img-upload__preview img');
const sliderEffect = uploadFormElement.querySelector('.effect-level__slider');
const effectsList = uploadFormElement.querySelector('.effects__list');
const effectRangeValue = uploadFormElement.querySelector('.effect-level__value');

function setScale(scale) {
  if (scale > 100) { scale = 100; }
  if (scale < 25) { scale = 25; }
  scaleValueButton.value = `${scale}%`;
  imagePreviewContainer.style.transform = `scale(${scale / 100})`;
}

scaleSmallerButton.addEventListener('click', () => {
  setScale(parseInt(scaleValueButton.value) - 25);
});

scaleBiggerButton.addEventListener('click', () => {
  setScale(parseInt(scaleValueButton.value) + 25);
});

function setEffect() {
  const effectRadioElement = uploadFormElement.querySelector('.effects__radio:checked');
  const effect = effectRadioElement.value;
  let filter = 'none';
  switch (effect) {
    case 'chrome':
      filter = `grayscale(${value})`
      break;

    case 'sepia':
      filter = `sepia(${value})`
      break;

    case 'marvin':
      filter = `invert(${value * 100}%)`
      break;

    case 'phobos':
      filter = `blire(${value * 3}px)`
      break;

    case 'heat':
      filter = `brightness(${value * 2 + 1})`
      break;
    default:
      break;
  }
  imagePreviewElement.style.filter = filter;
}

function initialSlider() {
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
}

function onChangeEffect(evt) {
  const slider = initialSlider();
  if (!slider) slider = initialSlider();
  console.log(slider);
  if (!slider) slider = initialSlider();
  if (evt.target.value === 'marvin') {
    slider.noUiSlider.updateOptions({
      step: 1,
    })
  };
  else {
    slider.noUiSlider.updateOptions({
      step: 0.1
    });
  }
  slider.noUiSlider.set(100);
  visibledSlider(slider);
  if (evt.target.value === 'none') { slider.noUiSlider.destroy(); slider = null; }
  setEffect(effectRangeValue);
}

effectsList.addEventListener('change', onChangeEffect);
