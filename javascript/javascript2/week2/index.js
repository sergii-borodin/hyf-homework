let numbers = [1, 2, 3, 4];
//let newNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     newNumbers[i] = numbers[i] * 2;
//   }
// }

const newNumbers = numbers
  .filter((number) => number % 2 !== 0)
  .map((number) => number * 2);

console.log("The doubled numbers are", newNumbers); // [2, 6]

// Copy the movies array in the movies file. Use this array to do the following tasks:
import movies from "./movies.js";

// 1. Create an array of movies containing the movies with a short title (you define what short means)
const shortMovieTitle = 4;

const moviesWithShortTitle = movies.filter(
  (movie) => movie.title.length < shortMovieTitle
);

// 2. Create an array of movie titles with long movie titles
const moviesWithLongTitle = movies.filter(
  (movie) => movie.title.length > shortMovieTitle
);
console.log("moviesWithShortTitle", moviesWithShortTitle);
console.log("moviesWithLongTitle", moviesWithLongTitle);

// 3. Count the number of movies made between 1980-1989 (including both the years)
let tallyMovies1980_1989 = 0;

movies.forEach((movie) =>
  movie.year >= 1980 && movie.year <= 1989
    ? ++tallyMovies1980_1989
    : tallyMovies1980_1989
);

console.log(
  `the number of movies made between 1980-1989 (including both the years) ${tallyMovies1980_1989}`
);

// 4. Create a new array that has an extra key called tag.
// The tag is based on the rating: Good(>= 7), Average(>= 4 and < 7), Bad(< 4)

const newMoviesWithRatingTag = movies.map((movie) => {
  const isGood = movie.rating >= 7;
  const isAverage = movie.rating >= 4;
  const isBad = movie.rating < 4;
  if (isGood) {
    movie.tag = "Good";
  } else if (isAverage) {
    movie.tag = "Average";
  } else if (isBad) {
    movie.tag = "Bad";
  }
  return movie;
});

console.log("newMoviesWithRatingTag", newMoviesWithRatingTag);

// 5. Using chaining, first filter the movies array to only contain the movies rated higher than 6.
// Now map the movies array to only the rating of the movies.

const moviesWithRatingOver6 = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);

console.log("moviesWithRatingOver6", moviesWithRatingOver6);

// 6. Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.
// So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin,
// you would return 6.
//  Can you make sure the search is case insensitive ?
let moviesIncludesKeywordsCounter = 0;
const numberOfMovieContainingKeywords = movies.forEach((movie) => {
  const keywords = ["Surfer", "Alien", "Benjamin"];
  const movieTitle = movie.title.toLowerCase();
  for (let i = 0; i < keywords.length; i++) {
    const keyword = keywords[i].toLowerCase();
    if (movieTitle.includes(keyword)) {
      ++moviesIncludesKeywordsCounter;
    }
  }
});
console.log(
  `${moviesIncludesKeywordsCounter} titles of movies includes the keywords`
);

// Create an array of movies where a word in the title is duplicated.
//     Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
//     Here are some madeup examples of movies with duplicated words in the title:
// "The three men and the pistol", "Chase three - The final chase"
const arrDupMovies = [];
const moviesWithDuplicatedWordInTitle = movies.forEach((movie) => {
  const arrTitleWords = movie.title.split(" ");
  arrTitleWords.sort((a, b) => {
    if (a === b) {
      arrDupMovies.push(movie);
    }
  });

  //   for (const word of arrTitleWords) {
  //     const testArr = [];
  //     test;
  //     if (arrTitleWords.includes(word)) {
  //       arrDupMovies.push(movie);
  //     }
  //   }
});

console.log(arrDupMovies);

// Calculate the average rating of all the movies using reduce. Optional
function getAverageMoviesRating(params) {
  const averageMoviesRating = movies.reduce(
    (total, movie) => total + movie.rating,
    0
  );
  return averageMoviesRating / movies.length;
}

console.log(getAverageMoviesRating(movies));
