// Step 1 : @sergii-borodin

// Step 2: Exercises

// Item array removal
// Remove the item in names that is equal to nameToRemove

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
function changeNames(name) {
  for (let i = 0; i < names.length; i++) {
    const element = names[i];
    if (element === name) {
      names.splice(i, 1);
    }
  }
  return names;
}

changeNames(nameToRemove);
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// When will we be there??
//     Write a function where you speficy your speed in km / h and how far you have to go in km.
//  The function has to return the time it will take to arrive at your destination.
//  The time should be formatted like this: 3 hours and 34 minutes.

// Hint: For formatting your best friend is Google!

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateDurationOfTravel(info) {
  const travelInHours = Math.floor(info.destinationDistance / info.speed);
  console.log(travelInHours);
  const reminderInKm = info.destinationDistance % info.speed;
  console.log(`reminderInKm = ${reminderInKm}`);
  const travelInMinutes = Math.round(
    (((reminderInKm * 100) / info.speed) * 60) / 100
  );
  console.log(travelInMinutes);
  const travelTime = `${travelInHours} hours and ${travelInMinutes} minutes`;
  return travelTime;
}

const travelTime = calculateDurationOfTravel(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

// Series duration of my life
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "The Orville",
    days: 0,
    hours: 18,
    minutes: 54,
  },
  {
    title: "Squid game",
    days: 0,
    hours: 8,
    minutes: 6,
  },
];
let days = 0;
let hours = 0;
let minutes = 0;
let reminderOfMinutes = 0;
let reminderOfHours = 0;
const averageLifespanInMinutes = 80 * 365 * 24 * 60;
let watchingGameOfThronesPercentageOfLife = 0;
let watchingOrvillePercentageOfLife = 0;
let watchingSquidGamePercentageOfLife = 0;

function sumSeriesDurations(params) {
  for (let i = 0; i < seriesDurations.length; i++) {
    days += seriesDurations[i].days;
    hours += seriesDurations[i].hours;
    minutes += seriesDurations[i].minutes;
  }
  console.log(days);
  console.log(hours);
  console.log(minutes);

  return minutes, hours, days;
}

function calculateMinutes() {
  if (minutes >= 60) {
    hours += Math.floor(minutes / 60);
    reminderOfMinutes += minutes % 60;
    console.log(hours);
    console.log(reminderOfMinutes);
    return reminderOfMinutes;
  }
}

function calculateHoursAndDays() {
  if (hours >= 24) {
    days += Math.floor(hours / 24);
    reminderOfHours += hours % 24;
    console.log(days);
    console.log(reminderOfHours);
    return reminderOfHours;
  }
}

function logSumWatching() {
  const sumWatching = `${days} days ${reminderOfHours} hours ${reminderOfMinutes} minutes`;
  console.log(sumWatching);
  return sumWatching;
}

function calculateWatchingGameOfThronesPercentageOfLife() {
  const myDurationOfWatchingGameOfThronesInMinutes = (3 * 24 + 1) * 60;
  console.log(myDurationOfWatchingGameOfThronesInMinutes);
  watchingGameOfThronesPercentageOfLife =
    (myDurationOfWatchingGameOfThronesInMinutes * 100) /
    averageLifespanInMinutes;
  console.log(
    `Game of thrones took ${
      Math.round(watchingGameOfThronesPercentageOfLife * 10000) / 10000
    }% of my life`
  );
  return watchingGameOfThronesPercentageOfLife;
}
function calculateWatchingOrvillePercentageOfLife() {
  const myDurationOfWatchingOrvilleInMinutes = (0 * 24 + 18) * 60 + 54;
  console.log(myDurationOfWatchingOrvilleInMinutes);
  watchingOrvillePercentageOfLife =
    (myDurationOfWatchingOrvilleInMinutes * 100) / averageLifespanInMinutes;
  console.log(
    `The Orville took ${
      Math.round(watchingOrvillePercentageOfLife * 10000) / 10000
    }% of my life`
  );
  return watchingOrvillePercentageOfLife;
}

function calculateWatchingSquidGamePercentageOfLife() {
  const myDurationOfWatchingSquidGameInMinutes = (0 * 24 + 8) * 60 + 6;
  console.log(myDurationOfWatchingSquidGameInMinutes);
  watchingSquidGamePercentageOfLife =
    (myDurationOfWatchingSquidGameInMinutes * 100) / averageLifespanInMinutes;
  console.log(
    `Squid game took ${
      Math.round(watchingSquidGamePercentageOfLife * 10000) / 10000
    }% of my life`
  );
  return watchingSquidGamePercentageOfLife;
}

function calculateWatchingSeriesPercentageOfLife() {
  const myDurationOfWatchingTvSeriesInPercentageOfLife =
    watchingGameOfThronesPercentageOfLife +
    watchingOrvillePercentageOfLife +
    watchingSquidGamePercentageOfLife;
  console.log(
    `In total that is ${
      Math.round(myDurationOfWatchingTvSeriesInPercentageOfLife * 10000) / 10000
    }% of my life`
  );
  return myDurationOfWatchingTvSeriesInPercentageOfLife;
}

sumSeriesDurations();
calculateMinutes();
calculateHoursAndDays();
logSumWatching();
calculateWatchingGameOfThronesPercentageOfLife();
calculateWatchingOrvillePercentageOfLife();
calculateWatchingSquidGamePercentageOfLife();
calculateWatchingSeriesPercentageOfLife();

// Step 3: Smart-ease - Back to the basics!

const notes = [];

function saveNote(content, id) {
  // write some code here
  notes.push({ content, id });
  return notes;
}

function getNote(id) {
  if (id > -1 && id <= notes.length + 1) {
    for (let i = 1; i < notes.length + 1; i++) {
      if (id === i) {
        console.log(notes[i - 1]);
        return notes[i - 1];
      }
    }
    const idError =
      "The note with this id doesn't exist! Please enter a correct id";
    console.log(idError);
    return idError;
  } else if (typeof id === "string") {
    const formatError =
      "This id format isn't correct. Please enter a correct id";
    console.log(formatError);
    return formatError;
  }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Make homework", 3);

const firstNote = getNote(1);
const secondNote = getNote(3);
const thirdNote = getNote(2);
const fourthNote = getNote(null);
const fifthNote = getNote("qwerty");
const sixthNote = getNote(4);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function logOutNotesFormatted(notes) {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${i}, has the following note text: ${notes[i].content}`
    );
  }
  return notes;
}

logOutNotesFormatted(notes);

// should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
