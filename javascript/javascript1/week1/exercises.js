// loginToFreeCodeCamp = sergii-borodin

// Age-ify (A future age calculator)
const yearOfBirth = 1989;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

// Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2020;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = true;
const dogYear = dogYearFuture - dogYearOfBirth;
if (shouldShowResultInDogYears) {
  console.log(
    `Your dog will be ${dogYear * 10} dog years old in ${dogYearFuture}`
  );
} else {
  console.log(
    `Your dog will be ${dogYear} human years old in ${dogYearFuture}`
  );
}

// Housey pricey (A house price estimator)
const arrOfFriends = ["Peter", "Juliya"];
const arrOfWidth = [8, 5];
const arrOfDepth = [10, 11];
const arrOfHight = [10, 8];
const arrgOfGardenSizeInM2 = [100, 70];
const houseCosts = [2500000, 1000000];

for (let i = 0; i < arrOfFriends.length; i++) {
  const housePriceAccordingFormula =
    arrOfWidth[i] * arrOfDepth[i] * arrOfHight[i] * 2.5 * 1000 +
    arrgOfGardenSizeInM2[i] * 300;
  if (housePriceAccordingFormula > houseCosts[i]) {
    console.log(arrOfFriends[i] + ", you pay more, then it should be");
  } else if (housePriceAccordingFormula < houseCosts[i]) {
    console.log(arrOfFriends[i] + ", you pay less, then it should be");
  } else {
    console.log(arrOfFriends[i] + ", you pay as it should be");
  }
}

// Ez Namey (Startup name generator)
const firstWords = [
  "easy",
  "awesome",
  "perfect",
  "best",
  "pleasant",
  "gentle",
  "smart",
  "cool",
  "fun",
  "fresh",
];
const secondWords = [
  "solution",
  "corporation",
  "independence",
  "future",
  "communication",
  "deal",
  "pleasure",
  "ambition",
  "foundation",
  "decision",
];

const startupName = firstWords[Math.floor(Math.random() * firstWords.length)] + " " + secondWords[Math.floor(Math.random() * secondWords.length)];
console.log(
  `The startup: ${startupName} contains ${startupName.length} characters`
);
