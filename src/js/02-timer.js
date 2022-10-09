import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    inputEl: document.querySelector('#datetime-picker'),
    btnEl: document.querySelector('[data-start]'),
    daysEl: document.querySelector('[data-days]'),
    hoursEl: document.querySelector('[data-hours]'),
    minutesEl: document.querySelector('[data-minutes]'),
    secondsEl: document.querySelector('[data-seconds]'),
}

refs.btnEl.disabled = true;
let idInterval = null;

refs.btnEl.addEventListener('click', onStartClick);

function onStartClick() {
    const startTime = dataPickr.selectedDates[0];

    setInterval(() => { 
    const currentTime = Date.now();
    const diffTime = startTime - currentTime;
    const time = convertMs(diffTime);

    refs.daysEl.textContent = time.days;
    refs.hoursEl.textContent = time.hours;
    refs.minutesEl.textContent = time.minutes;
    refs.secondsEl.textContent = time.seconds;
  }, 1000);
    
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] > new Date()) {
          refs.btnEl.disabled = false;
      } else {
          refs.btnEl.disabled = true;
          Notiflix.Notify.failure('Please choose a date in the future');
          clearInterval(idInterval);
      }
  },
};

const dataPickr = new flatpickr(refs.inputEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(3000));
// console.log(convertMs(250000));

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
