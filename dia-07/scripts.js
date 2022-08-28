const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

const kickOffWorldCupDate = new Date('2022-08-31 23:59:59')

function zeroLeft(number) {
  return String(number).padStart(2, '0')
}

function diffKickOffDateWorldCup() {
  const currentDate = new Date().getTime()
  return kickOffWorldCupDate.getTime() - currentDate
}

function setCountDown(element, value) {
  document.querySelector(`.${element}`).innerHTML = value
}

function diffDay(diff) {
  return zeroLeft(Math.floor(diff / day))
}

function diffHour(diff) {
  const round = Math.floor(diff % day / hour)
  return zeroLeft(round)
}

function diffMinute(diff) {
  const round = Math.floor(diff % hour / minute)
  return zeroLeft(round)
}

function diffSecond(diff) {
  const round = Math.floor(diff % minute / second)
  return zeroLeft(round)
}

function countDown() {
  const diff = diffKickOffDateWorldCup()

  setCountDown('days', diffDay(diff))
  setCountDown('hours', diffHour(diff))
  setCountDown('minutes', diffMinute(diff))
  setCountDown('seconds', diffSecond(diff))
}

window.onload = function () {
  initTheme()
  setInterval(countDown, 1000)
}