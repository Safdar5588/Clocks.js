let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

function clock() {

  let currentDate = new Date();

  let getSecond = currentDate.getSeconds()

  let getminute = currentDate.getMinutes()
  let gethour = currentDate.getHours()

  let secondLine = getSecond * 6
  let minuteLine = getminute * 6
  let hourLine = gethour * 30

  second.style.transform = `rotate(${secondLine}deg)`
  minute.style.transform = `rotate(${minuteLine}deg)`
  hour.style.transform = `rotate(${hourLine}deg)`

}

setInterval(function () {

  clock()

}, 1000)