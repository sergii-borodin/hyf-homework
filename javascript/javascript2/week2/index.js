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
const arrMoviesWithTag = movies.map((movie) => movie);
