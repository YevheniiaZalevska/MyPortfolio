const burgerBtn = document.querySelector('.burger-btn'); 
const modalOverlay = document.querySelector('.modal-overlay'); 
const closeModalBtn = modalOverlay.querySelector('.icon-close'); 

burgerBtn.addEventListener('click', () => {
  modalOverlay.classList.add('active'); 
  document.body.style.overflow = 'hidden';
});

closeModalBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('active'); 
  document.body.style.overflow = 'auto';
});

modalOverlay.addEventListener('click', event => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});