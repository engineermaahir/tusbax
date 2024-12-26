let Number = document.querySelector('#Number');
let Increment = document.querySelector('#Increment');
let Reset = document.querySelector('#Reset');
let Decrement = document.querySelector('#Decrement')

Increment.addEventListener('click', () => {
  Number.textContent = parseInt(Number.textContent) + 1;
    if(Number.textContent === '10'){
      Number.style.color = 'red';
    }else{
      Number.style.color = 'black';
    }
})
Decrement.addEventListener('click', () => {
  if (parseInt(Number.textContent) > 0) {
    Number.textContent -= 1;
    if(Number.textContent === '10'){
      Number.style.color = 'red'
    }else{
      Number.style.color = 'black'
    }
  }else{
    Number.textContent = 0;
  }
  
})
Reset.addEventListener('click', () => {
  Number.textContent = 0;
})

Decrement.addEventListener('mouseover',() =>{
  Decrement.style.backgroundColor = 'yellow'
  Decrement.style.color = 'black'
})
Decrement.addEventListener('mouseout', ()=>{
  Decrement.style.backgroundColor = 'red'
  Decrement.style.color = 'white'
})
Increment.addEventListener('mouseover',() =>{
  Increment.style.backgroundColor = 'lightblue'
  Increment.style.color = 'black'
})
Increment.addEventListener('mouseout', ()=>{
  Increment.style.backgroundColor = 'red'
  Increment.style.color = 'white'
})
Reset.addEventListener('mouseover',() =>{
  Reset.style.backgroundColor = 'lightgreen'
  Reset.style.color = 'black'
})
Reset.addEventListener('mouseout', ()=>{
  Reset.style.backgroundColor = 'blue'
  Reset.style.color = 'white'
})