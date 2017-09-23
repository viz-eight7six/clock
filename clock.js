
document.addEventListener("DOMContentLoaded", function() {
  let clock = document.querySelector("div");
  document.querySelector("form").addEventListener("submit", function(time){
    console.log(time);
    alert(time);
  });
  let time = new Date();
  let hour = time.getHours();

  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let am = true;
  if(hour > 12){
    hour -= 12;
    am = false;
  }
  let currentTime = '';
  tick();
  setInterval(tick, 1000);

  function tick(){
    seconds += 1;
    if (seconds === 60){
      minutes +=1;
      seconds = 0;
    }
    if(minutes === 60){
      hour +=1;
      minutes = 0;
      if(hour === 12){
        am = !am;
      }
    }
    if(hour === 13){
      hour = 1;
    }

    currentTime = `${padding(hour)}:${padding(minutes)}:${padding(seconds)} ${am ?'AM':'PM'}`;
    clock.innerHTML = currentTime;
  }


});

function padding(x){
  if(x < 10){
    return '0' + x;
  } else {
    return x;
  }
}




// You can only get current time once.
// You must display hours, minutes, seconds, and AM/PM.
// You can only use MDN documentation.
// Style it as best as you can within the allotted time.
// You have 35 minutes to complete this (please set a timer).
// dateObj.getHours() returns the hour from 0 to 23.
// Be sure to pad numbers with zeroes on your clock (ie. 02:45:06, not 2:45:6)
// Be cognizant about testing your code as you go.
// Bonus: Add an alarm functionality to your clock.
