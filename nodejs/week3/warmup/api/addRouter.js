const express = require("express");
const addRouter = express.Router();

// Addition
// Getting data through query parameters using GET
addRouter.get("/", async (request, response) => {
  try {
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
          Number(previousValue) + Number(currentValue)
      );
      response.send(`${result}`);
    }
  } catch (error) {
    throw error;
  }
});

// Addition
// Getting data through request body using POST
addRouter.post("/", async (request, response) => {
  try {
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
          Number(previousValue) + Number(currentValue)
      );
      response.send(`${result}`);
    }
  } catch (error) {
    throw error;
  }
});
module.exports = addRouter;
