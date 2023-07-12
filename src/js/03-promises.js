const form = document.querySelector('.form');
const amount = document.querySelector('input[name="amount"]');
const step = document.querySelector('input[name="step"]');
const delay = document.querySelector('input[name="delay"]');

console.log('first', typeof amount.value)

console.log('first', delay)



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};

const onFormSubmit = (e)=>{
  console.log('e', e)
  e.preventDefault();
  const amountValue = Number(amount.value);
  const stepValue = Number(step.value);
  const delayValue = Number(delay.value);
  console.log('first', amountValue)


  for (let index = 0; index < amountValue; index+=1) {

    const currentDelay = delayValue + stepValue * index;
    const position = index + 1;

    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
};

form.addEventListener('submit', onFormSubmit);