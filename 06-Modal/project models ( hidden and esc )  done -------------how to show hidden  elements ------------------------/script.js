const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const BtnShowModal = document.querySelectorAll('.show-modal');
const BtnCloseModal = document.querySelector('.close-modal');

for (let i = 0; i < BtnShowModal.length; i++) {
  BtnShowModal[i].addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

overlay.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

BtnCloseModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('.hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
