const express = require("express");
const { request } = require("../app");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  const queryParams = request.query;
  const maxPrice = Number(request.query.maxPrice);
  const limit = Number(request.query.limit);
  const title = request.query.title;
  const createdAfter = request.query.createdAfter;
  // Check if a query parameter exist
  if (queryParams) {
    // Get meals that has a price smaller than maxPrice
    if (maxPrice) {
      response.send(meals.filter((meal) => meal.price <= maxPrice));
      // Get meals that partially match a title
    } else if (title) {
      const filtredMealsByTitle = meals.filter((meal) =>
        meal.title.toLowerCase().includes(title.toLowerCase())
      );
      if (filtredMealsByTitle.length === 0) {
        response.send("Meal wasn't found");
      } else {
        response.send(filtredMealsByTitle);
      }
      // Get meals that has been created after the date
    } else if (createdAfter) {
      if (new Date(createdAfter) != "Invalid Date") {
        response.send(
          meals.filter(
            (meal) => new Date(meal.createdAt) > new Date(createdAfter)
          )
        );
      } else {
        response.status(400).send("Invalid Date");
      }
      // Only specific number of meals
    } else if (limit) {
      response.send(meals.slice(0, limit));
    } else response.status(400).send("Invalid query parameter");
  } else {
    response.send(meals);
  }
});

// Get a specific meal by id
router.get("/:id", async (request, response) => {
  const mealId = parseInt(request.params.id);
  const found = meals.some((meal) => meal.id === mealId);
  if (found) {
    response.json(meals.filter((meal) => meal.id === mealId));
  } else {
    response.status(400).json({ msg: `No meal with id of ${mealId}` });
  }
});

module.exports = router;
