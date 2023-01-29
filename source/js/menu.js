const mainNav = document.querySelector('.header__nav');
const navToggle = document.querySelector('.header__toggle');

mainNav.classList.remove('header__nav--nojs');
mainNav.classList.remove('header__nav--opened');
mainNav.classList.add('header__nav--closed');

navToggle.addEventListener('click', function() {
  if (mainNav.classList.contains('header__nav--closed')) {
    mainNav.classList.add('header__nav--opened');
    mainNav.classList.remove('header__nav--closed');
  } else {
    mainNav.classList.remove('header__nav--opened');
    mainNav.classList.add('header__nav--closed');
  }
});
