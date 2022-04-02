const meals = require("./data/meals");
const reviews = require("./data/reviews");

const mealsWithReview = meals.map((meal) => {
  meal.reviews = [];
  reviews.filter((review) => {
    if (meal.id === review.mealId) {
      meal.reviews.push(review);
    }
  });
  return meal;
});

module.exports = mealsWithReview;
