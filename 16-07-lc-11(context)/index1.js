const timer = {
  secondPassed: 0,
  minsPaseed: 0,

  startTimer() {
    // input: callback, number
    // output: number (timer id)

    // callback
    // input: none
    // output: undefined

// lose context #2
  //   const callback = function() {
  //     console.log('this VALUE', this);

  //     this.secondPassed += 1;

  //     if (this.secondPassed === 5) {
  //       this.minsPaseed += 1;
  //       this.secondPassed = 0;
  //     }

  //     console.log(this.minsPaseed, this.secondPassed);
      
  //   }
  // };
  // const callbackBinded = callback.bind(this);

  setInterval(() => {
    this.secondPassed += 1;
    if (this.secondPassed === 60) {
      this.minsPaseed += 1;
      this.secondPassed = 0;
    }
    console.log(this.minsPaseed, this.secondPassed);
  }, 1000);
  },

  stopTimer() {
    clearInterval(this.intervalId);
  },

  getTime() {
    const seconds = this.secondPassed < 10 ? '0' + this.secondPassed : this.secondPassed;
    return `${this.minsPaseed}:${seconds}`
  },

  resetTimer() {
    this.minsPaseed = 0;
    this.secondPassed = 0;
  }
};

timer.startTimer();
