import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;

let timerId = null;

const daysTime = document.querySelector('span[data-days]');
const hoursTime = document.querySelector('span[data-hours]');
const minutesTime = document.querySelector('span[data-minutes]');
const secondsTime = document.querySelector('span[data-seconds]');

let quantityMS=0;

flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(selectedDates[0]<new Date()){
            alert('Please choose a date in the future')
        }else{
            startBtn.disabled = false;
            quantityMS=selectedDates[0]-new Date();
            console.log('first', selectedDates[0]-new Date())
            console.log('quantityMS', quantityMS)
        };
    console.log(selectedDates[0]);
    console.log(selectedDates);
    },
});

console.log('quantityMS', quantityMS)

const addLeadingZero = (value) => {
    if (value < 10) {
        return `${value}`.padStart(2, "0");  
    } else { 
        return `${value}`};
};


const convertMs = (ms) => {
    // console.log('ms', ms)
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    days ? daysTime.textContent = addLeadingZero(days) : daysTime.textContent = '00';

    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    hours ? hoursTime.textContent = addLeadingZero(hours) : hoursTime.textContent = '00';

    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    minutes ? minutesTime.textContent = addLeadingZero(minutes) : minutesTime.textContent = '00';

    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    seconds ? secondsTime.textContent = addLeadingZero(seconds) : secondsTime.textContent ='00';


    return { days, hours, minutes, seconds };
}

//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
console.log('minutes', convertMs())

const onStartTimer = (ms) => {
    startBtn.disabled = true;

    timerId = setInterval(() => {
        quantityMS-=1000;
        if( quantityMS<=-1){
            startBtn.disabled = true;
            clearInterval(timerId);
        }else {   
            convertMs(quantityMS);
            console.log('quantityMS', quantityMS)
        }}, 1000)

};


startBtn.addEventListener('click', onStartTimer);