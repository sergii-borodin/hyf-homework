// Getting reference to the body and assigning to the variable below
const bodyRef = document.querySelector("body");

// Creating the input and appending to the body
const input = document.createElement("input");
bodyRef.appendChild(input);
const btn = document.createElement("button");
bodyRef.appendChild(btn);
btn.innerText = "Get spirit animal";

// Creating a tag to display the spirit animal into
const output = document.createElement("p");

bodyRef.appendChild(output);

let userName = "";

const spiritAnimals = [
  "Wise octopus",
  "Crouching Tiger",
  "Hidden Dragon",
  "Lazy penguin",
  "Smart crocodile",
  "Wooden monkey",
  "Fat cat",
  "Golden fish",
  "Invisible elephant",
  "Brave chicken",
];

function inputChange(event) {
  input.textContent = event.target.value;
}

input.addEventListener("input", inputChange);

function onClick(event) {
  if (input.textContent === "") {
    alert("Please enter your name");
  } else {
    userName = input.textContent;
    const randomSpiritAnimal = spiritAnimals[Math.floor(Math.random() * 10)];
    output.textContent = `${userName} - ${randomSpiritAnimal}`;
  }
}

btn.addEventListener("click", onClick);
