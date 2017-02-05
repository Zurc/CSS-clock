const secondsHand = document.querySelector('.clock2 .seconds');
const minutesHand = document.querySelector('.clock2 .minutes');
const hourHand = document.querySelector('.clock2 .hour');

function setDate() {
    const now = new Date();
    // console.log(now);

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360);
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    // console.log(hour);
}

setInterval(setDate, 1000);