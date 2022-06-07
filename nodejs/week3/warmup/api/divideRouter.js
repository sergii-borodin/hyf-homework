const express = require("express");
const divideRouter = express.Router();

// Division
// Getting data through query parameters using GET
divideRouter.get("/", async (request, response) => {
  const queryParam = request.query.queryParam;
  if (
    Object.keys(queryParam).length === 0 ||
    typeof Number(Object.keys(queryParam)) !== "number"
  ) {
    response.statusCode = 422;
    response.json({ message: "Bad input. Enter a number" });
    return;
  } else if (queryParam.length < 2) {
    response.statusCode = 422;
    response.json({
      message: "Enter minimum one more number to make a calculation",
    });
    return;
  } else {
    const result = queryParam.reduce(
      (previousValue, currentValue) =>
        Number(previousValue) / Number(currentValue)
    );
    response.send(`${result}`);
  }
});

// Division
// Getting data through the request body using POST
divideRouter.post("/", async (request, response) => {
  const queryParam = request.body.queryParam;
  if (
    Object.keys(queryParam).length === 0 ||
    typeof Number(Object.keys(queryParam)) !== "number"
  ) {
    response.statusCode = 422;
    response.json({ message: "Bad input. Enter a number" });
    return;
  } else if (queryParam.length < 2) {
    response.statusCode = 422;
    response.json({
      message: "Enter minimum one more number to make a calculation",
    });
    return;
  } else {
    const result = queryParam.reduce(
      (previousValue, currentValue) =>
        Number(previousValue) / Number(currentValue)
    );
    response.send(`${result}`);
  }
});

module.exports = divideRouter;
