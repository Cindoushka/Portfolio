const slideInputs = document.querySelectorAll('.slide-input');
const sliderContainer = document.querySelector('.slider-container');

slideInputs.forEach((input, index) => {
  input.addEventListener('change', () => {
    sliderContainer.style.setProperty('--slide-index', index);
  });
});