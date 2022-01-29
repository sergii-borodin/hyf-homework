// Find the shortest word
// Write a function that finds the shortest word of an array of words

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
let amountOfLetters = danishWords[0].length;
let shortestWord = "";
function findShortestWord(danishWords) {
  for (let i = 0; i < danishWords.length; i++) {
    const element = danishWords[i];
    if (amountOfLetters > element.length) {
      amountOfLetters = element.length;
    }
  }
  danishWords.forEach((element) => {
    if (element.length === amountOfLetters) {
      shortestWord = element;
    }
  });

  return `The shortest word is ${shortestWord}`;
}

console.log(findShortestWord(danishWords)); // returns 'ø'

// Find and count the Danish letters
// Find the individual number and the total number of Danish letters in a string.

const danishString = "Jeg har en blå bil";

function findDanishLettersInString(danishString) {
  const string = {
    total: 0,
    å: 0,
    æ: 0,
    ø: 0,
  };
  let { total, å, æ, ø } = string;
  for (let i = 0; i < danishString.length; i++) {
    const element = danishString[i].toLowerCase();
    switch (element) {
      case "å":
        ++å;
        break;
      case "ø":
        ++ø;
        break;
      case "æ":
        ++æ;
        break;
    }
  }
  total = å + æ + ø;
  console.log(total, å, æ, ø);
  return string;
}
console.log(findDanishLettersInString(danishString)); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(findDanishLettersInString(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}
