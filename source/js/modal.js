const modal = document.querySelector('.modal');
const modalOpenButton = document.querySelector('.promo__button');
const modalCloseButton = document.querySelector('.modal__button-close');

modalOpenButton.addEventListener('click', () => {
  modal.classList.toggle('modal--open');
  modal.classList.toggle('modal--close');
});

modalCloseButton.addEventListener('click', () => {
  modal.classList.toggle('modal--open');
  modal.classList.toggle('modal--close');
});

