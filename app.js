'use srict';
// Clock DOM elements
const hoursEL = document.querySelector('.hours');
const minutesEL = document.querySelector('.minutes');
const secondsEL = document.querySelector('.seconds');
// Date DOM element
const showDate = document.querySelector('.dateJS');

function displayTime() {
  // Create date and set variables
  const clock = new Date();
  const hours = clock.getHours();
  const minutes = clock.getMinutes();
  const seconds = clock.getSeconds();

  // Check if minutes and seconds need a '0' if below 10;
  if (minutes < 10) {
    minutesEL.textContent = '0' + minutes;
  } else {
    minutesEL.textContent = minutes;
  }

  if (seconds < 10) {
    secondsEL.textContent = '0' + seconds;
  } else {
    secondsEL.textContent = seconds;
  }

  hoursEL.textContent = hours;
}

setInterval(displayTime, 1000);

function displayDate() {
  const date = new Date();

  const options = {
    weekday: 'long',
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  };

  const str = `<p>${date.toLocaleString('default', options)}</p>`;
  showDate.innerHTML = str;
}
displayDate();
