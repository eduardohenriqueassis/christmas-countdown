import Countdown from './countdown.js';

const diasParaoNatal = new Countdown('24 December 2022 23:59:59 GMT-0300');

console.log(diasParaoNatal.total);

const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

function refreshDate() {
  days.innerText = diasParaoNatal.total.days;
  hours.innerText = diasParaoNatal.total.hours;
  minutes.innerText = diasParaoNatal.total.minutes;
  seconds.innerText = diasParaoNatal.total.seconds;
}

setInterval(refreshDate, 1000);
