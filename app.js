const currentUTCTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
);
const currentDayOfTheWeekElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
);

const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

function getCurrentUTCTime() {
    const currentUTCTime = new Date().getTime();
    const currentDayOfTheWeek = daysOfWeek[new Date().getUTCDay()];

    currentDayOfTheWeekElement.textContent = `${currentDayOfTheWeek}`;
    currentUTCTimeElement.textContent = `${currentUTCTime} milliseconds`;

    // console.log(currentDayOfTheWeek);
}

getCurrentUTCTime();

setInterval(getCurrentUTCTime, 80);
