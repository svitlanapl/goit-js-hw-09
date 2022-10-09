const refs = {
    bodyEl: document.querySelector('body'),
    btnStartEl: document.querySelector('[data-start]'),
    btnStopEl: document.querySelector('[data-stop]'),
}
let idInterval = null;
refs.btnStopEl.disabled = true;
 
refs.btnStartEl.addEventListener('click', onbtnStart);
refs.btnStopEl.addEventListener('click', onbtnStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onbtnStart() {
    idInterval = setInterval(() => {
        refs.bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.btnStartEl.disabled = true;
    refs.btnStopEl.disabled = false;
}

function onbtnStop() {
    clearInterval(idInterval);
    refs.btnStartEl.disabled = false;
    refs.btnStopEl.disabled = true;
}
