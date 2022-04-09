const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
  try {
    console.log(reviews);
    console.log("in /api/reviews");
  } catch (error) {
    throw error;
  }
});

// Get a specific Review by id
router.get("/:id", async (request, response) => {
  const reviewId = parseInt(request.params.id);
  const found = reviews.some((review) => review.id === reviewId);
  if (found) {
    response.json(reviews.filter((review) => review.id === reviewId));
  } else {
    response.status(400).json({ msg: `No review with id of ${reviewId}` });
  }
});

module.exports = router;
