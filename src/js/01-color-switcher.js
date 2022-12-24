const refs = {
  buttonStart: document.querySelector('button[data-start]'),
  buttonStop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

let timerId = null;
const DELAY = 1000;
refs.buttonStop.disabled = true;

refs.buttonStart.addEventListener('click', onStartClick);
refs.buttonStop.addEventListener('click', onStopClick);

function onStartClick() {
  timerId = setInterval(() => {
    changeBgColor();
  }, DELAY);

  refs.buttonStart.disabled = true;
  refs.buttonStop.disabled = false;
}

function onStopClick() {
  refs.buttonStart.disabled = false;
  refs.buttonStop.disabled = true;
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBgColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
