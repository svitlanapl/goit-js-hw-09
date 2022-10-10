// import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('.form'),
  btnSubmitEl: document.querySelector('.form button'),
//   delayEl: document.querySelector('input[name="delay"]'),
//   stepEl: document.querySelector('input[name="step"]'),
//   amountEl: document.querySelector('input[name="amount"]'),
}

refs.formEl.addEventListener('click', onbtnSubmit);

function onbtnSubmit(evt) {
  evt.preventDefault();
  let delay = Number(refs.formEl.delay.value);
  const step = Number(refs.formEl.step.value);
  const amount = Number(refs.formEl.amount.value);

  for (let i = 0; i < amount; i += 1) {
    const position = i + 1;

    createPromise(position, delay)
      .then(result => {
        Notify.success(result);
      })
      .catch(error => {
        Notify.failure(error);
      });

    delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

