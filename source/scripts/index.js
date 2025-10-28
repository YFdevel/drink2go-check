// Range Slider
const rangeSlider = document.querySelector('#range-slider');
const formatForSlider = {
  from: function (formattedValue) {
    return Number(formattedValue);
  },
  to: function (numericValue) {
    return Math.round(numericValue);
  },
};

noUiSlider.create(rangeSlider, {
  start: [0, 900],
  connect: true,
  range: {
    min: 0,
    max: 1000,
  },
  format: formatForSlider,
});

const formatValues = [
  document.getElementById('min-num'),
  document.getElementById('max-num'),
];

rangeSlider.noUiSlider.on('update', (values, handle) => {
  formatValues[handle].value = values[handle];
});


// Switch Toggle
document.querySelectorAll('input[name="country"]').forEach((radio) => {
  radio.addEventListener('change', function () {
    document.querySelectorAll('.switch__option').forEach((option) => {
      option.classList.remove('selected');
    });
    if (this.checked) {
      this.closest('.option').classList.add('selected');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const checkedRadio = document.querySelector('input[name="country"]:checked');
  if (checkedRadio) {
    checkedRadio.closest('.switch__option').classList.add('selected');
  }
});
