// Countdown Logic
// Set the date (Year, Month index [0-11], Day, Hour, Minute)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 3); // 3 days from now

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("mins").innerText = minutes.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "GIVEAWAY EXPIRED";
    }
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();