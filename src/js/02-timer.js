import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let timerID = null;
let userDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDates[0] <= options.defaultDate
      ? (Notify.failure('Please choose a date in the future'),
        (refs.button.disabled = true))
      : (refs.button.disabled = false);
    userDate = selectedDates[0];
  },
};

 flatpickr('#datetime-picker', options);

export const refs = {
  input: document.querySelector('#datetime-picker'),
  button: document.querySelector('[data-start]'),
  secondsSpan: document.querySelector('[data-seconds]'),
  minutesSpan: document.querySelector('[data-minutes]'),
  hoursSpan: document.querySelector('[data-hours]'),
  daysSpan: document.querySelector('[data-days]'),
};

window.addEventListener('click', startTimer);

function startTimer(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  timerID = setInterval(countDownTimer, 1000);
  refs.button.disabled = true;
  refs.input.disabled = true;
}

function countDownTimer() {
  userDate = Date.parse(refs.input.value);
  const d = userDate - Date.now();
  let { days, hours, minutes, seconds } = getTimeComponents(d);
  if (userDate <= Date.now()) {
    Notify.failure('Please, choose date in future');
    clearInterval(timerID);
    refs.input.disabled = false;
  } 
  
  if (d <= 1000) {
    clearInterval(timerID);
    seconds = getTimeComponents(0).seconds;
    minutes = getTimeComponents(0).minutes;
    hours = getTimeComponents(0).hours;
    days = getTimeComponents(0).days;
    refs.input.disabled = false;
  }
  updateCountDownSpan({ seconds, minutes, hours, days });
}

function getTimeComponents(time) {
  return convertMs(time);
}

function updateCountDownSpan({ seconds, minutes, hours, days }) {
  refs.secondsSpan.textContent = seconds;
  refs.minutesSpan.textContent = minutes;
  refs.hoursSpan.textContent = hours;
  refs.daysSpan.textContent = days;
}

const convertMs = (ms) => {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

const pad = (value) => {
    return String(value).padStart(2, '0');
}




// const calendar = flatpickr('#datetime-picker', flatpickrOptions);

// function periodValidation(inputDate, dateNow) {
//   if (inputDate < dateNow) {
//     Notiflix.Notify.failure('Please choose a date in the future', {
//       fontSize: '20px',
//       timeout: 1000,
//     });
//     return false;
//   }
//   Notiflix.Notify.success('Click "Start" button', {
//     fontSize: '20px',
//     timeout: 2000,
//   });
//   return true;
// }