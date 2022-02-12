const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const BtnCloseModal = document.querySelector('.close-modal');
const BtnShowModal = document.querySelectorAll('.show-modal');

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < BtnShowModal.length; i++) {
  BtnShowModal[i].addEventListener('click', openModal);
}

BtnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
    