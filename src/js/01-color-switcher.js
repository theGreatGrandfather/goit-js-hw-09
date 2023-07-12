const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body =  document.querySelector('body');

const onStartBtnClick = () => {
    console.log('start');
    changeRandomHexColor();
    startBtn.disabled = true;
    startBtn.removeEventListener('click', onStartBtnClick);
    stopBtn.addEventListener('click', onStopBtnClick);
};

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const changeRandomHexColor = () => {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
        console.log('backgroundColor: ', body.style.backgroundColor)
    }, 1000);
};

const onStopBtnClick = () => {
    console.log('stop' )
    clearInterval(timerId);
    startBtn.disabled = false;
    startBtn.addEventListener('click', onStartBtnClick);
    stopBtn.removeEventListener('click', onStopBtnClick);
};

startBtn.addEventListener('click', onStartBtnClick);