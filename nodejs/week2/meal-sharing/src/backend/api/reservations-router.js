const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
  try {
    console.log(reservations);
    console.log("in /api/reservations");
  } catch (error) {
    throw error;
  }
});

// Get a specific Reservation by id
router.get("/:id", async (request, response) => {
  const reservationId = parseInt(request.params.id);
  const found = reservations.some(
    (reservation) => reservation.id === reservationId
  );
  if (found) {
    response.json(
      reservations.filter((reservation) => reservation.id === reservationId)
    );
  } else {
    response
      .status(400)
      .json({ msg: `No reservation with id of ${reservationId}` });
  }
});

module.exports = router;
