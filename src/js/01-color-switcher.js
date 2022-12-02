

const throttle = require('lodash.throttle');



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
}
let intId = null;
refs.btnStart.addEventListener("click", throttle(onBtnStartClick,1000));
refs.btnStop.addEventListener("click", onBtnStopClick);

function onBtnStartClick() {
  
 intId = setInterval(onChangeColor, 1000);
  refs.btnStart.setAttribute('disabled', ''); 
}

function onBtnStopClick() {
  clearInterval(intId);
  refs.btnStart.removeAttribute('disabled', ''); 
}

function onChangeColor() {
    const bodyColor = getRandomHexColor();
    refs.body.style.backgroundColor = bodyColor;
   }