setTimeout(() => {
  console.log("Called after 2.5 seconds");
}, 2500);

function logSomethingAfterDelay(stringToLog, delay) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay);
}

logSomethingAfterDelay("Hello world", 3000);
logSomethingAfterDelay("Hello Mom", 4000);

const btnRef = document.getElementById("btn");
btnRef.addEventListener("click", () => {
  logSomethingAfterDelay("Called after 5 sec", 5000);
});

const earthLogging = function logOutEarth() {
  console.log("Earth");
};

const saturnLogging = function logOutSaturn() {
  console.log("Saturn");
};

function planetLogFunction(func) {
  func();
}

planetLogFunction(earthLogging);
planetLogFunction(saturnLogging);
