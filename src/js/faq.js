import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faqContainer = document.querySelector('.questions-container');

const accordion = new Accordion(faqContainer, {
  // options
  showMultiple: false,
  duration: 400,
  onOpen: function (el) {
    el.style.overflow = 'visible';


    const allQuestions = document.querySelectorAll('.ac');

    allQuestions.forEach(question => {
      question.classList.remove('opened', 'closed');
      question.classList.add('closed');
    });

    const question = el.closest('.ac');
    const prevQuestion = question.previousElementSibling;

    if (prevQuestion) {
      prevQuestion.style.borderBottom = 'none';
    }

    question.classList.remove('closed');
    question.classList.add('opened');

    const icon = el.querySelector('.faq-icon use');
    icon.setAttribute('href', './sprite.svg#icon-vector-up');
  },
  onClose: function (el) {
    const question = el.closest('.ac');
    const prevQuestion = question.previousElementSibling;

    if (prevQuestion) {
      prevQuestion.style.borderBottom = '1px solid #e4e5e6';
    }

    question.classList.remove('opened');
    question.classList.add('closed');

    const icon = el.querySelector('.faq-icon use');
    icon.setAttribute('href', './sprite.svg#icon-vector-up');
  },
});

accordion.open(0);