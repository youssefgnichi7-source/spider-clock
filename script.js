function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDegree = seconds * 6;
    const minuteDegree = minutes * 6 + seconds * 0.1;
    const hourDegree = (hours % 12) * 30 + minutes * 0.5;

    document.getElementById("second").style.transform =
        rotate(${secondDegree}deg);

    document.getElementById("minute").style.transform =
        rotate(${minuteDegree}deg);

    document.getElementById("hour").style.transform =
        rotate(${hourDegree}deg);
}

updateClock();
setInterval(updateClock, 1000);
