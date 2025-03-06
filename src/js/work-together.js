import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const closeModalButton = document.getElementById('closeModal');
const errorNotification = document.getElementById('errorNotification');
const backdrop = document.getElementById('backdrop');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  console.log('Sending data:', {
    email: formData.get('email'),
    comment: formData.get('comment'),
  });

  const data = {
    email: formData.get('email'),
    comment: String(formData.get('comment')),
  };

  console.log(data);

  fetch('https://portfolio-js.b.goit.study/api/requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(data => {
      console.log('Success:', data);

      sendMessage(data);

      backdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      form.reset(); 
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later!',
      });
    });
});

function sendMessage(data) {
  const modalTitleJs = document.getElementById('jsTitle');
  const modalTextJs = document.getElementById('jsText');

  if (modalTitleJs) {
    const message = `${data.title}`;
    modalTitleJs.textContent = message;
  } else {
    console.error('Element with id "jsTitle" not found.');
  }

  if (modalTextJs) {
    const messageText = `${data.message}`;
    modalTextJs.textContent = messageText;
  } else {
    console.error('Element with id "jsText" not found.');
  }
}

function closeModal() {
  backdrop.classList.remove('is-open');
  document.body.style.overflow = 'auto';
}

closeModalButton.addEventListener('click', closeModal);

backdrop.addEventListener('click', function (event) {
  if (event.target === backdrop) {
    closeModal();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});