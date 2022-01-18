// VOICE ASSISTANT

// Created an object, to keep, add and store all information about user in one place.
// And for easy using a variables inside a function
const speaker = {
  speakerName: "",
  greeting: "Hello my name is Benjamin",
  speakerToDoList: ["Make homework", "Cook some food"],
};

function getReply(command) {
  if (command === speaker.greeting) {
    function lastWord(words) {
      let n = words.replace(/[\[\]?.,\/#!$%\^&\*;:{}=\\|_~()]/g, "").split(" ");
      return n[n.length - 1];
    }
    const userName = lastWord(speaker.greeting);
    speaker.speakerName = userName;
    return `Nice to meet you ${userName}`;
  }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(speaker.speakerName);
