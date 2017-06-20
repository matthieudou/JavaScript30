let countdown;
const timeLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds){
  // clears every other countdown that could be loaded before
  clearInterval(countdown);

  // gives times in milliseconds
  const now = Date.now();
  const then = now + seconds * 1000;

  // displays the time before the countdown starts
  displayTimeLeft(seconds);
  displayEndTime(then);
  // start the countdown
  countdown = setInterval(function(){
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0){
      // useful ?
      // clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

// function to display the time left
function displayTimeLeft(seconds){
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const display = `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  document.title = display;
  timeLeft.textContent = display;
}

// function to display the endTime
function displayEndTime(timestamp){
  const time = new Date(timestamp);
  endTime.textContent = `Timer ends at ${time.getHours()}:${time.getMinutes()}`
}

function startTimer(){
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e){
  e.preventDefault();
  const minutes = parseInt(this.minutes.value);
  timer(minutes * 60);
  this.reset();
});
