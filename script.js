// Countdown to 22nd August
const countdown = document.getElementById("countdown");

function updateCountdown() {
  const target = new Date("2025-08-22T00:00:00");
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    countdown.innerHTML = "🎂 It's Leeja's Birthday Today! 🎂";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.innerHTML = `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s left`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
