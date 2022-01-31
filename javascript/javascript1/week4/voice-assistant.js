// VOICE ASSISTANT

// Created an object, to keep, add and store all information about user in one place.
// And for easy using a variables inside the function below.
const speakerData = {
  speakerName: "",
  greeting: "Hello my name is Benjamin",
  whatsName: "What is my name?",
  addingFishingNote: "Add fishing to my todo",
  addSinginInShower: "Add singing in the shower to my todo",
  removingFishing: "Remove fishing from my todo",
  whatIsInMyToDo: "What is on my todo?",
  speakerToDoList: ["Make homework", "Make some food"],
  speakerUpdatedToDoList: [],
  dateToday: "What day is it today?",
  simpleMath: ["-", "+", "*", "/"],
};

function getReply(command) {
  // Hello my name is Benjamin
  if (command === speakerData.greeting) {
    if (speakerData.speakerName === "") {
      function lastWord(command) {
        let n = command
          .replace(/[\[\]?.,\/#!$%\^&\*;:{}=\\|_~()]/g, "")
          .split(" ");
        return n[n.length - 1];
      }
      speakerData.speakerName = lastWord(command);
      return `Nice to meet you ${speakerData.speakerName}`;
    } else return `Glad to see you again ${speakerData.speakerName}`;
  }
  if (command === speakerData.whatsName) {
    return `Your name is ${speakerData.speakerName}`;
  }
  // Add fishing to my todo
  if (command === speakerData.addingFishingNote) {
    const arr = command.split([" "[length]]);
    const fishing = arr[1];

    speakerData.speakerToDoList.push(fishing);
    console.log(speakerData.speakerToDoList);
    return "fishing added to your todo";
  }
  // Add singing in the shower to my todo
  if (command === speakerData.addSinginInShower) {
    const strSingingInShower = command.slice(4, 25);
    speakerData.speakerToDoList.push(strSingingInShower);
    console.log(speakerData.speakerToDoList);
    return "Singing in the shower added to your todo";
  }
  // Remove fishing from my todo
  if (command === speakerData.removingFishing) {
    for (let i = 0; i < speakerData.speakerToDoList.length; i++) {
      const element = speakerData.speakerToDoList[i];
      if (element !== "fishing") {
        speakerData.speakerUpdatedToDoList.push(element);
      } else continue;
    }
    return "Removed fishing from your todo";
  }
  // What is on my todo?
  if (command === speakerData.whatIsInMyToDo) {
    return speakerData.speakerUpdatedToDoList;
  }
  // What day is it today?
  if (command === speakerData.dateToday) {
    // Creating an instance of a Date object and assigning in the variable
    const currentDate = new Date();

    // Assigning a current date  in the variable
    const currentDayOfMonth = currentDate.getDate();

    // Assigning a current month in the variable
    const arrOfMonth = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const numberOfMonth = currentDate.getMonth();
    const currentMonth = arrOfMonth[numberOfMonth];

    // Assigning a current year in the variable
    const currentYear = currentDate.getFullYear();
    return `${currentDayOfMonth}. of ${currentMonth} ${currentYear}`;
  }

  // Simple Math
  if (
    command.includes("+") ||
    command.includes("*") ||
    command.includes("-") ||
    command.includes("/")
  ) {
    const mathExpression = command.substr(8);
    return eval(mathExpression);
  }

  // Set a timer for 4 minutes
  // Means that timer can be seted only in minutes
  if (command.includes("timer" && "minutes")) {
    const minutes = command.replace(/\D/g, "");
    const milliseconds = minutes * 1000 * 60;
    const setTimer = setTimeout(() => {
      console.log("4 minutes timer done");
    }, milliseconds);
    return `Timer set for ${minutes} minutes`;
  } else if (command.includes("timer" && "seconds")) {
    const seconds = command.replace(/\D/g, "");
    const milliseconds = seconds * 1000;
    const setTimer = setTimeout(() => {
      console.log("4 seconds timer done");
    }, milliseconds);
    return `Timer set for ${seconds} seconds`;
  } else if (command.includes("timer" && "hours")) {
    const hours = command.replace(/\D/g, "");
    const milliseconds = hours * 1000 * 60 * 60;
    const setTimer = setTimeout(() => {
      console.log("4 hours timer done");
    }, milliseconds);
    return `Timer set for ${hours} hours`;
  }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply("Set a timer for 4 seconds"));
console.log(getReply("Set a timer for 4 hours"));
