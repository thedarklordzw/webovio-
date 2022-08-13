const heroBtn = document.querySelector('.hero-cta');
const cards = document.querySelectorAll('.cta-section__card');
const dropdown = document.querySelector('.dropdown');
const cardParent = document.querySelector('.cta-section__list');
const navButton = document.querySelector('.hamburger-btn');
const navModal = document.querySelector('.modal-nav');
const listItems = document.querySelectorAll('.dropdown__item');

const listItemsArr = Array.from(listItems);
const cardsArr = Array.from(cards);

// card hover basic effect

cardParent.addEventListener('mouseover', event => {
  if (cardsArr.includes(event.target)) {
    const targetHTML = event.target;

    cardsArr.forEach(cardEl => cardEl.classList.remove('card-active'));
    targetHTML.classList.add('card-active');
  } else return;
});

// hover functions
function onHamburgerHoverIn() {
  dropdown.classList.remove('closed');
}
function onHamburgerHoverOut() {
  dropdown.classList.add('closed');
}

// event listeners
navButton.addEventListener('mouseover', onHamburgerHoverIn);
navButton.addEventListener('mouseout', onHamburgerHoverOut);

navButton.addEventListener('click', event => {
  navModal.classList.remove('hidden');
});

navModal.addEventListener('click', () => {
  navModal.classList.add('hidden');
});
