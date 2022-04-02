const express = require("express");

const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

// import of meals with review function implementation
const mealsWithReview = require("./mealsWithReview");

// Respond with meals with review
app.get("/meals", async (request, response) => {
  response.send(mealsWithReview);
});

// Respond with the json for all a meals, which cheapper than 70 units
app.get("/cheap-meals", async (request, response) => {
  const cheapMeals = mealsWithReview.filter((meal) => meal.price < 70);
  response.send(cheapMeals);
});

// Respond with the json for all a meals, which fits more than 4 persones
app.get("/large-meals", async (request, response) => {
  const largeMeals = mealsWithReview.filter(
    (meal) => meal.maxNumberOfGuests > 4
  );
  response.send(largeMeals);
});

// Respond with the json for a one random meal
app.get("/meal", async (request, response) => {
  const randomMeal = mealsWithReview[Math.floor(Math.random() * meals.length)];
  response.send(randomMeal);
});

// Respond with the json for all reservations
app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

// Respond with the json for a random reservation
app.get("/reservation", async (request, response) => {
  const randomReservation =
    reservations[Math.floor(Math.random() * meals.length)];
  response.send(randomReservation);
});

module.exports = app;
