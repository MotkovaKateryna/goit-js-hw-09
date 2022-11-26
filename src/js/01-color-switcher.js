const throttle = require('lodash.throttle');



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]')
}

refs.btnStart.addEventListener("click", throttle(onBtnStartClick,500));
refs.btnStop.addEventListener("click", onBtnStopClick);



function onBtnStartClick() {
    
}

function onBtnStopClick() {
    
}