const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const items = document.querySelectorAll('.deadline-format h4')
const giveAway = document.querySelector('.giveaway');
const deadLine = document.querySelector('.deadline');

let futureDate = new Date(2021, 8, 25, 16, 40, 0);
console.log(futureDate)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const date = weekdays[futureDate.getDate()];
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month]


giveAway.textContent = `giveaway ends on ${date} ${month} ${year} ${hours}:${minutes}am`

// future in mimutes

const futureTime = futureDate.getTime();

function RemainingTime(){
    const toDay = new Date().getTime();

    const t = futureTime - toDay;
    // console.log(t)

    //1s = 1000ms
    //1m = 60s
    //1hr = 60m
    //1d = 24hr
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = t/oneDay;
    days = Math.floor(days);
    // console.log(days);

    let hours = Math.floor((t % oneDay)/oneHour);
    // console.log(hours);

    let minutes = Math.floor((t % oneHour)/oneMinute);
    // console.log(minutes);

    let seconds = Math.floor((t % oneMinute)/1000);
    // console.log(seconds);

    const values = [days, hours, minutes, seconds];
    function FormatTime(item){
        if(item < 10){
            return `0${item}`
        }
        return item;
    }
    items.forEach(function(item, index){
        item.innerHTML = FormatTime(values[index]);
    })
    if(t < 0){
        clearInterval(countDown);
        deadLine.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`
    }
}

const countDown = setInterval(RemainingTime, 1000);

RemainingTime();