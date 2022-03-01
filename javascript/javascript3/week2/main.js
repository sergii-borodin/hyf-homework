// Movies exercise
// This exercise is repetition of array functions. you dont have to use chaining or anything fancy. Just fetch the movies and use the correct array function to get the following movies:

// Fetch movies from this api:

// Create an array of bad movies
// Creat an array of bad movies since year 2000

let result = fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
).then((response) =>
  response
    .json()
    .then((arrOfAllmovies) => {
      const badMovie = 4;
      const arrayOfBadMovies = arrOfAllmovies.filter(
        (movie) => movie.rating < badMovie
      );
      console.log(arrayOfBadMovies);
      return arrayOfBadMovies;
    })
    .then((arrayOfBadMovies) => {
      const yearLimit = 2000;
      const arrayOfBadMoviesSince2000 = arrayOfBadMovies.filter(
        (movie) => movie.year > yearLimit
      );
      console.log(arrayOfBadMoviesSince2000);
    })
);

// // Promise that resolves after set time
// // Create a function that has one parameter: resolveAfter.
// // Calling this function will return a promise that resolves after the resolveAfter seconds has passed.

// // Here is an example of how to use the promise

// // makeUpYourOwnFunctionName(8).then(() => {
// //   console.log("I am called asynchronously"); // logged out after 8 seconds
// // });

runFunctionAfterDelay(8).then(() => {
  console.log("I am called asynchronously"); // logged out after 8 seconds
});

function runFunctionAfterDelay(resolveAfter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, resolveAfter * 1000);
  });
}

// // When you have written the promise, use it with async/await
function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved"), time * 1000);
  });
}

function runFunctionAfterDelayWithAsync(str) {
  const message = `I am called asynchronously with async after ${str}`;
  return message;
}

(async () => {
  const str = await delay(9);
  const str2 = await runFunctionAfterDelayWithAsync(str);
  console.log(str2);
})();

// // Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises.
// // The getCurrentPosition function is probably going to throw an error,
// //     but that is fine.As long as you can use it as a promise.

setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});

function setTimeoutPromise(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Promise resolved"));
    }, timeout);
  });
}

getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (currentPosition) =>
        resolve({
          latitude: currentPosition.coords.latitude,
          longitude: currentPosition.coords.longitude,
        }),
      (err) => reject(err.message)
    );
  });
}

// Fetching and waiting
// Do the 3 steps below using promises and .then.
// The 3 steps:

// Wait 3 seconds
// After 3 seconds fetch some data from any api you like
// Log out the data from the api
// Which way do you prefer, the promise way or the async/await way?

function wait3Seconds(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("3 seconds passed"));
    }, timeout * 1000);
  });
}

function fetchingAndWaiting() {
  wait3Seconds(3)
    .then(() => fetch("https://api.chucknorris.io/jokes/random"))
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}

fetchingAndWaiting();

// Do the 3 steps below using async/await

function wait3Seconds(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("3 seconds passed"));
    }, timeout * 1000);
  });
}

(async () => {
  await wait3Seconds(3);
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await response.json();
  console.log(data.value);
})();
