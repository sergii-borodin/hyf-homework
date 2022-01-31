// Find the shortest word
// Write a function that finds the shortest word of an array of words

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
let shortestWord = danishWords[0];
function findShortestWord(danishWords) {
  for (let i = 0; i < danishWords.length; i++) {
    if (shortestWord.length > danishWords[i].length) {
      shortestWord = danishWords[i];
    } else {
      continue;
    }
  }
  return `The shortest word is ${shortestWord}`;
}

console.log(findShortestWord(danishWords)); // returns 'ø'

// Find and count the Danish letters
// Find the individual number and the total number of Danish letters in a string.

const danishString = "Jeg har en blå bil";

function findDanishLettersInString(danishString) {
  const danishLetters = ["æ", "ø", "å"];
  const tally = {};

  let total = 0;
  for (char of danishString) {
    if (danishLetters.includes(char)) {
      tally[char] = !tally[char] ? 1 : tally[char] + 1;
      total += 1;
    }
  }

  tally["total"] = total;
  return tally;
}
console.log(findDanishLettersInString(danishString)); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
console.log(findDanishLettersInString(danishString2)); // returns {total: 4, æ: 1, ø: 2, å: 1}
