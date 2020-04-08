class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
   this.intervalId = setInterval(() => {
    //  stuff
    this.currentTime += 1
   }, 1000);
   this.intervalId = this.intervalId
  }
  
  getMinutes() {
    // ... your code goes here
    return (Math.floor(this.currentTime / 60));
  }

  getSeconds() {
    // ... your code goes here
    return (Math.floor(this.currentTime % 60))
  }

  twoDigitsNumber() {
    // ... your code goes here
   let num = this.currentTime.toFixed(0)
   let newNum = "0"
    if (num.length < 2) {
      newNum += num
    }
    return num
  }

  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0
  }
  splitClick() {
    // ... your code goes here
    
  }
}
