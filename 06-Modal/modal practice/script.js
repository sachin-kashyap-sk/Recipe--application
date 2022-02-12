const BtnOpenModal = document.querySelectorAll('.show-modal');
const BtnCloseModal = document.querySelector('.close-modal');
const modalHidden = document.querySelector('.modal');
const overlayHidden = document.querySelector('.overlay');

for (let i = 0; i < BtnOpenModal.length; i++) {
  BtnOpenModal[i].addEventListener('click', () => {
    modalHidden.classList.remove('hidden');
    overlayHidden.classList.remove('hidden');
  });
}

overlayHidden.addEventListener('click', () => {
  modalHidden.classList.add('hidden');
  overlayHidden.classList.add('hidden');
});

BtnCloseModal.addEventListener('click', () => {
  modalHidden.classList.add('hidden');
  overlayHidden.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalHidden.classList.contains('.hidden')) {
    modalHidden.classList.add('hidden');
    overlayHidden.classList.add('hidden');
  }
});
