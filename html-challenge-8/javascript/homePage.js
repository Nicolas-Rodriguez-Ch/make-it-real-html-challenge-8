let listed__numbers = document.querySelectorAll('.listed__numbers');
let button = document.querySelector('button');
let card__container = document.querySelector('.card__container');
let card__container_thank_you = document.querySelector('.card__container-thank-you');
let card__rating = document.querySelector('.card__rating');

let number_rating = 0

listed__numbers.forEach(element => {
  element.addEventListener('click', function() {
    number_rating = parseInt(element.value);
  });
});

button.addEventListener('click', function (event) {
  event.preventDefault();

  if (number_rating === 0) {
    alert('No puedes hacer una calificación en 0, por favor elige un número')
  } else {
    const paragraph = document.createElement('p');
    paragraph.innerText = ` You selected ${number_rating} out of 5`;
    card__rating.appendChild(paragraph);
  
    card__container.classList.remove('active');
    card__container.classList.add('disactive');

    card__container_thank_you.classList.remove('disactive');
    card__container_thank_you.classList.add('active');
  }
});