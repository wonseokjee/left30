// worker.js
// let currentSeconds = 0;
let interval;

self.onmessage = (e) => {
  if (e.data.type === 'startTimer') {
    if (interval) {
      clearInterval(interval);
    }
    // currentSeconds = e.data.value;
    interval = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      const realMinute = new Date().getMinutes();
      const realSecond = new Date().getSeconds();

      self.postMessage({ value: [now, realMinute, realSecond] });
    }, 1000);
  } else if (e.data.type === 'stopTimer') {
    clearInterval(interval);
  }
};
