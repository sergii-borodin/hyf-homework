// VOICE ASSISTANT

// Created an object, to keep, add and store all information about user in one place.
// And for easy using a variables inside the function below.
const speakerData = {
  speakerName: "",
  greeting: "Hello my name is Benjamin",
  whatsName: "What is my name?",
  note: "Add fishing to my todo",
  speakerToDoList: ["Make homework", "Make some food"],
};

function getReply(command) {
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
  if (command === speakerData.note) {
    const arr = command.split([" "[length]]);
    const getFishing = arr[1];

    speakerData.speakerToDoList.push(getFishing);
    console.log(speakerData.speakerToDoList);
    return "fishing added to your todo";
  }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin"));

console.log(getReply("What is my name?"));

console.log(getReply("Add fishing to my todo"));
