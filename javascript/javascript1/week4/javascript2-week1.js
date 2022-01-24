// Find the shortest word
// Write a function that finds the shortest word of an array of words

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
let amountOfLiteras = danishWords[0].length;
let shortestWord = "";
function findShortestWord(danishWords) {
  for (let i = 0; i < danishWords.length; i++) {
    const element = danishWords[i];
    if (amountOfLiteras > element.length) {
      amountOfLiteras = element.length;
    }
  }
  danishWords.forEach((element) => {
    if (element.length === amountOfLiteras) {
      shortestWord = element;
    }
  });

  return shortestWord;
}

console.log(findShortestWord(danishWords)); // returns 'ø'
