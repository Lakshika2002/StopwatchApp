let timer;
let seconds = 0;
let isRunning = false;

function updateDisplay() {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  document.getElementById('display').innerText = 
    `${hrs < 10 ? '0' : ''}${hrs}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
}

function pauseTimer() {
  isRunning = false;
  clearInterval(timer);
}

function resetTimer() {
  pauseTimer();
  seconds = 0;
  updateDisplay();
}