function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = (hours % 12) * 30 + minutes * 0.5;

  document.getElementById("second").style.transform =
    translateX(-50%) rotate(${secondAngle}deg);

  document.getElementById("minute").style.transform =
    translateX(-50%) rotate(${minuteAngle}deg);

  document.getElementById("hour").style.transform =
    translateX(-50%) rotate(${hourAngle}deg);
}

updateClock();
setInterval(updateClock, 1000);
