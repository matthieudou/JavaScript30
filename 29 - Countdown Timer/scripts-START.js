let countdown;

function timer(seconds){
  const now = Date.now();
  const then = now + seconds * 1000;
  console.log({now, then});
  countdown = setInterval(function(){
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0){
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}


function displayTimeLeft(seconds){
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const display = `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  document.title = display;
  document.querySelector('.display__time-left').textContent = display;
}
