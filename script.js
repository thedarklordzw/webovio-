const heroBtn = document.querySelector('.hero-cta'),
  cards = document.querySelectorAll('.cta-section__card'),
  dropdown = document.querySelector('.dropdown'),
  cardParent = document.querySelector('.cta-section__list'),
  navButton = document.querySelector('.hamburger-btn'),
  navModal = document.querySelector('.modal-nav'),
  listItems = document.querySelectorAll('.dropdown__item'),
  listItemsArr = Array.from(listItems),
  cardsArr = Array.from(cards);
function onHamburgerHoverIn() {
  dropdown.classList.remove('closed');
}
function onHamburgerHoverOut() {
  dropdown.classList.add('closed');
}
cardParent.addEventListener('mouseover', e => {
  if (cardsArr.includes(e.target)) {
    const r = e.target;
    cardsArr.forEach(e => e.classList.remove('card-active')),
      r.classList.add('card-active');
  }
}),
  navButton.addEventListener('mouseover', onHamburgerHoverIn),
  navButton.addEventListener('mouseout', onHamburgerHoverOut),
  navButton.addEventListener('click', e => {
    navModal.classList.remove('hidden');
  }),
  navModal.addEventListener('click', () => {
    navModal.classList.add('hidden');
  });
