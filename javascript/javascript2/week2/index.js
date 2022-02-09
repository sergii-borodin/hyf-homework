let numbers = [1, 2, 3, 4];

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
// let tallyMovies1980_1989 = 0;

// movies.forEach((movie) =>
//   movie.year >= 1980 && movie.year <= 1989
//     ? ++tallyMovies1980_1989
//     : tallyMovies1980_1989
// );
const tallyMovies1980_1989 = movies.filter((movie) => {
  return movie.year >= 1980 && movie.year <= 1989;
}).length;

console.log(
  `the number of movies made between 1980-1989 (including both the years) ${tallyMovies1980_1989}`
);

// 4. Create a new array that has an extra key called tag.
// The tag is based on the rating: Good(>= 7), Average(>= 4 and < 7), Bad(< 4)

const newMoviesWithRatingTag = [...movies].map((movie) => {
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
// let moviesIncludesKeywordsCounter = 0;
// const numberOfMovieContainingKeywords = movies.forEach((movie) => {
//   const keywords = ["Surfer", "Alien", "Benjamin"];
//   const movieTitle = movie.title.toLowerCase();
//   for (let i = 0; i < keywords.length; i++) {
//     const keyword = keywords[i].toLowerCase();
//     if (movieTitle.includes(keyword)) {
//       ++moviesIncludesKeywordsCounter;
//     }
//   }
// });
// console.log(
//   `${moviesIncludesKeywordsCounter} titles of movies includes the keywords`
// );
const moviesContainKeyWordsCounter = movies.reduce((acc, movies) => {
  return movies.title.toLowerCase().includes("surfer") ||
    movies.title.toLowerCase().includes("alien") ||
    movies.title.toLowerCase().includes("benjamin")
    ? ++acc
    : acc;
}, 0);
console.log(
  `${moviesContainKeyWordsCounter} titles of movies includes the keywords`
);
// const moviesIncludesKeywordsCounter = movies.reduce((counter, movie) => {
//   if (
//     movie.title.toLowerCase().includes("surfer") ||
//     movie.title.toLowerCase().includes("alien") ||
//     movie.title.toLowerCase().includes("benjamin")
//   )
//     counter += 1;

//   return counter;
// }, 0);

// console.log(moviesIncludesKeywordsCounter);

// Create an array of movies where a word in the title is duplicated.

const dublicateWords = movies.filter((movie) => {
  const alreadySeen = [];
  const words = movie.title.toLowerCase().split(" ");
  let result = false;
  words.forEach((word) => {
    if (alreadySeen.includes(word)) {
      result = true;
    } else {
      alreadySeen.push(word);
    }
  });
  return result;
});

console.log(dublicateWords);

// Calculate the average rating of all the movies using reduce. Optional
function getAverageMoviesRating(params) {
  const averageMoviesRating = movies.reduce(
    (total, movie) => total + movie.rating,
    0
  );
  return Math.round((averageMoviesRating / movies.length) * 10) / 10;
}

console.log(getAverageMoviesRating(movies));

// Count the total number of Good, Average and Bad movies using reduce.
//  A return could fx be { goodMovies: 33, averageMovies: 45, goodMovies: 123 } Optional

const movieByTagCounter = newMoviesWithRatingTag.reduce(
  (acc, movie) => {
    if (movie.tag.toLowerCase() === "good") {
      acc.goodMovies += 1;
    } else if (movie.tag.toLowerCase() === "average") {
      acc.averageMovies += 1;
    } else if (movie.tag.toLowerCase() === "bad") {
      acc.badMovies += 1;
    }
    return acc;
  },
  {
    goodMovies: 0,
    averageMovies: 0,
    badMovies: 0,
  }
);
console.log(movieByTagCounter);
