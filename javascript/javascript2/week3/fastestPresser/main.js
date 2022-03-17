// 1. Create an input and a button in html. When the button is clicked, get the value of the input.
//This value will be the amount of time the game should run.
// 2. Set a timeout for the time specified by the user.
//After that time has run out just log out a simple string.
// 3. Create an event listener so you can call a function when any key is pressed.
//Now grap the actual key that was pressed.Fx was it a j or an i.We are interested in s and l.
//Here google is your friend!
// 4. Keep a counter for how many times l and s was pressed.
// 5. Now put it all together! After the timeout is done figure out which of the counters is largest.
const topContainerRef = document.getElementById("topContainer");
const inputDurationRef = document.getElementById("inputDuration");
const startBtnRef = document.getElementById("startBtn");
const leftPlayerCounterOutputRef = document.getElementById(
  "leftPlayerCounterOutput"
);
const rightPlayerCounterOutputRef = document.getElementById(
  "rightPlayerCounterOutput"
);
const leftPlayerInterfaceRef = document.getElementById("leftPlayerInterface");
const rightPlayerInterfaceRef = document.getElementById("rightPlayerInterface");
const winNotificationRef = document.createElement("p");
const confettiCanvas = document.createElement("canvas");

let gameDuration = 0;
let leftPlayerCounter = 0;
let rightPlayerCounter = 0;

inputDurationRef.addEventListener("input", onInputChange);
startBtnRef.addEventListener("click", onStartBtnClick);

function onInputChange(e) {
  gameDuration = parseInt(e.target.value);
  if (isNaN(gameDuration)) {
    return;
  }
  
  startBtnRef.disabled = false;
}

function onKeyUpHandler(e) {
  if (e.key === "s") {
    leftPlayerCounter += 1;
    leftPlayerCounterOutputRef.textContent = leftPlayerCounter;
  } else if (e.key === "l") {
    rightPlayerCounter += 1;
    rightPlayerCounterOutputRef.textContent = rightPlayerCounter;
  }
}
function onStartBtnClick(e) {
  const duration = gameDuration * 1000;
  setTimeout(endGame, duration);
  document.addEventListener("keyup", onKeyUpHandler);
}

function getConfetti(winnerSide) {
  confettiCanvas.setAttribute("id", "winner-canvas");
  winnerSide.appendChild(confettiCanvas);
  const confettiSettings = { target: "winner-canvas", width: 250, height: 250 };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}

function showWinNotification(playerSide) {
  winNotificationRef.textContent = "You are winner!!!";
  playerSide.appendChild(winNotificationRef);
}

function endGame() {
  document.removeEventListener("keyup", onKeyUpHandler);
  if (leftPlayerCounter > rightPlayerCounter) {
    getConfetti(leftPlayerInterfaceRef);
    showWinNotification(leftPlayerInterfaceRef);
  } else {
    getConfetti(rightPlayerInterfaceRef);
    showWinNotification(rightPlayerInterfaceRef);
  }
  console.log("The game is over");
  startBtnRef.disabled = true;
  createResetBtn();
}

function createResetBtn() {
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "Play again";
  topContainerRef.appendChild(resetBtn);
  resetBtn.addEventListener("click", onResetBtnClik);
  function onResetBtnClik() {
    inputDurationRef.textContent = "";
    winNotificationRef.textContent = "";
    leftPlayerCounterOutputRef.textContent = "";
    rightPlayerCounterOutputRef.textContent = "";
    leftPlayerCounter = 0;
    rightPlayerCounter = 0;
    startBtnRef.disabled = false;
    const winnerCanvasRef = document.getElementById("winner-canvas");
    winnerCanvasRef.remove();
    resetBtn.removeEventListener("click", onResetBtnClik);
    resetBtn.remove();
  }
}
