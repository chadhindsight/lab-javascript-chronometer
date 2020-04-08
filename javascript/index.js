const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printMinutes()
  printSeconds()
  printMilliseconds()
}

function printMinutes() {
  // ... your code goes here
  minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1]
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0]
}

function printSeconds() {
  // ... your code goes here
  secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1]
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  milUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMilliSeconds())[1]
  milDec.innerText = chronometer.twoDigitsNumber(chronometer.getMilliSeconds())[0]
}

function printSplit() {
  // ... your code goes here
  let li = document.createElement('li') // <li></li>
  li.innerHTML = chronometer.splitClick() // <li>00:00</li> 00:00 this is whatever the current time on the watch is
  splits.appendChild(li) //<ol> li </ol>
}

function clearSplits() {
  // ... your code goes here
  let allSplits = document.getElementById('splits')
  allSplits.innerText = ''
}

function setStopBtn() {
  // ... your code goes here
  btnLeft.className = 'btn stop'
  // innerText vs innerHTML vs textContent - https://medium.com/better-programming/whats-best-innertext-vs-innerhtml-vs-textcontent-903ebc43a3fc
  btnLeft.innerText = 'STOP'
}

function setSplitBtn() {
  // ... your code goes here
  btnRight.className = 'btn split'
  btnRight.innerText = 'SPLIT'
}

function setStartBtn() {
  // ... your code goes here
  btnLeft.className = 'btn start'
  btnLeft.innerText = 'START'
}

function setResetBtn() {
  // ... your code goes here
  btnRight.className = 'btn reset'
  btnRight.innerText = 'RESET'
}

function startTimer() {
  chronometer.startClick(printTime)  // we start the timer
  setStopBtn()  // change (i.e. toggle) the button to say STOP instead of START
  setSplitBtn()
}

function stopTimer() {
  chronometer.stopClick()   // this clears the interval
  setStartBtn()
  setResetBtn()
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains("start")) {  // the timer is not running
    startTimer()
  } else {  // the timer is running
    stopTimer()
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
  if (btnRight.classList.contains("reset")) {  // the timer is not running
    chronometer.resetClick()  // we reset clock
    clearSplits()
    printTime() // print the new time which is 00:00
  } else {  // the timer is running
    printSplit()
  }
});