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

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const mobileButton = document.querySelector('.header__mobile-menu');
  const nav = document.querySelector('.header__nav');

  mobileButton.addEventListener('click', (event) => {
    event.target.classList.toggle('opened');
    nav.classList.toggle('active');
  });
});

// Promo Slider
class PromoSlider {
  constructor() {
    this.slides = document.querySelectorAll('.carousel__item.slide');
    this.dots = document.querySelectorAll('.slider-pagination .dot');
    this.prevBtn = document.getElementById('btn-prev');
    this.nextBtn = document.getElementById('btn-next');
    this.currentIndex = 0;
    this.slidesCount = this.slides.length;
    this.init();
  }

  init() {
    this.showSlide(this.currentIndex);
    this.bindEvents();
  }

  bindEvents() {
    this.prevBtn.addEventListener('click', () => this.prevSlide());
    this.nextBtn.addEventListener('click', () => this.nextSlide());
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });
    document.addEventListener('keydown', (e) => this.handleKeyboard(e));
  }

  showSlide(index) {
    this.slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    this.dots.forEach((dot) => {
      dot.classList.remove('active');
    });
    if (this.slides[index]) {
      this.slides[index].classList.add('active');
    }
    if (this.dots[index]) {
      this.dots[index].classList.add('active');
    }
    this.currentIndex = index;
  }

  nextSlide() {
    let newIndex = this.currentIndex + 1;
    if (newIndex >= this.slidesCount) {
      newIndex = 0;
    }
    this.showSlide(newIndex);
  }

  prevSlide() {
    let newIndex = this.currentIndex - 1;
    if (newIndex < 0) {
      newIndex = this.slidesCount - 1;
    }
    this.showSlide(newIndex);
  }

  goToSlide(index) {
    if (index >= 0 && index < this.slidesCount) {
      this.showSlide(index);
    }
  }

  handleKeyboard(event) {
    switch(event.key) {
      case 'ArrowLeft':
        this.prevSlide();
        break;
      case 'ArrowRight':
        this.nextSlide();
        break;
      case 'Home':
        event.preventDefault();
        this.goToSlide(0);
        break;
      case 'End':
        event.preventDefault();
        this.goToSlide(this.slidesCount - 1);
        break;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.slider = new PromoSlider();
});
