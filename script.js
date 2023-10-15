const d = new Date();

//todo get  current Month
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = months[d.getMonth()];
// console.log(month);

//todo get current day
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = days[d.getDay()];
// console.log(currentDay);

//todo get current date
let currentDate = d.getDate();
// console.log(date);

//todo get current year
let currentYear = d.getFullYear();
// console.log(day);

//todo apply all value to html element to show in web page

//fetch value from html element
let month = document.querySelector("#month");
let day = document.querySelector("#day");
let date = document.querySelector("#date");
let year = document.querySelector("#year");
let liveTime = document.querySelector("#liveTime");

month.innerText = currentMonth;
day.innerText = currentDay;
date.innerText = currentDate;
year.innerText = currentYear;



function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('liveTime').innerHTML  =  h +" H "+ ":" + m +" Min "+ ":" + s+" Sec";
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


