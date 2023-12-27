let days = document.getElementById('days');
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')

let eventDate = new Date('30 Dec 2023 10:45');

function updateTime(){

let diff = (eventDate - Date.now()) / 1000;

let day = Math.floor( diff / ( 60 * 60 * 24 ) );
let hour = Math.floor( diff / 3600 ) % 24;
let minute = Math.floor( diff / 60 ) % 60;
let second = Math.floor( diff % 60 );

days.innerHTML = day;
hours.innerHTML = hour;
minutes.innerHTML = minute;
seconds.innerHTML = second;

}

let upd_tm = setInterval(updateTime,1000);