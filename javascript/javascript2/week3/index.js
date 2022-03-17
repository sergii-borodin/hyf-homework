// 1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
setTimeout(() => {
  console.log("Called after 2.5 seconds");
}, 2500);
// 2. Create a function that takes 2 parameters: delay and stringToLog.
//Calling this function should log out the stringToLog after delay seconds.
// Call the function you have created with some different arguments.
function logSomethingAfterDelay(stringToLog, delay) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay);
}

logSomethingAfterDelay("Hello world", 3000);
logSomethingAfterDelay("Hello Mom", 4000);

// 3. Create a button in html.
// When clicking this button, use the function you created in the previous task to log out the text:
// Called after 5 seconds 5 seconds after the button is clicked.
const btnRef = document.getElementById("btn");
btnRef.addEventListener("click", () => {
  logSomethingAfterDelay("Called after 5 sec", 5000);
});

// 4. Create two functions and assign them to two different variables.
// One function logs out Earth, the other function logs out Saturn.
// Now create a new third function that has one parameter: planetLogFunction.
//The only thing the third function should do is call the provided parameter function.
// Try call the third function once with the Earth function and once with the Saturn function.
const earthLogging = function () {
  console.log("Earth");
};

const saturnLogging = function () {
  console.log("Saturn");
};

function planetLogFunction(func) {
  func();
}

planetLogFunction(earthLogging);
planetLogFunction(saturnLogging);

// 5. Create a button with the text called "Log location".
// When this button is clicked the location(latitude, longitude)
// of the user should be logged out using this browser api
const logLocationBtnRef = document.getElementById("logLocationBtn");
logLocationBtnRef.addEventListener("click", onClick);
function onClick() {
  function success(pos) {
    const crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  navigator.geolocation.getCurrentPosition(success, error);
}
// 6. Optional Now show that location on a map using fx the Google maps api

// 7. Create a function called runAfterDelay.
// It has two parameters: delay and callback.
// When called the function should wait delay seconds and then call the provided callback function.
// Try and call this function with different delays and different callback functions

function runAfterDelay(delay, logger) {
  const delayInMs = delay * 1000;
  setTimeout(logger, delayInMs);
}

runAfterDelay(4, () => console.log("Should be logged after 4 seconds"));

runAfterDelay(10, () => console.log("Should be logged after 10 seconds"));

// 8. Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds.
// If a double click has been detected, log out the text: "double click!"
window.addEventListener("dblclick", () => console.log("double click!"));

// 9. Create a function called jokeCreator that has three parameters:
// shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function.
// If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke.And vice versa.

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();
}

jokeCreator(
  true,
  () =>
    console.log(
      "Hear about the new restaurant called Karma? There’s no menu: You get what you deserve."
    ),
  () =>
    console.log(
      "Helvetica and Times New Roman walk into a bar.“Get out of here!” shouts the bartender. “We don’t serve your type.”"
    )
);

// Function as a variable
// Create funtions that are used in these different ways:

// Create an array with 3 items. All items should be functions.
//Iterate through the array and call all the functions.

const arrFn = [
  function fn1() {
    console.log("First function");
  },
  function fn1() {
    console.log("Second function");
  },
  function fn1() {
    console.log("Third function");
  },
];

arrFn.forEach((fn) => {
  fn();
});

// Create a function as a const and try creating a function normally.
// Call both functions.Read up on this if you are interested:
function justAFunction() {
  console.log("A function created normally");
}

const aFunctionWithConst = function () {
  console.log("A const function");
};

justAFunction();
aFunctionWithConst();

// Create an object that has a key whose value is a function. Try calling this function.
const obj = {
  key1: function justAFunction1() {
    console.log("A function1 as a value");
  },
  key2: function justAFunction2() {
    console.log("A function2 as a value");
  },
  key3: function justAFunction3() {
    console.log("A function3 as a value");
  },
};

obj.key1();
obj.key2();
obj.key3();
