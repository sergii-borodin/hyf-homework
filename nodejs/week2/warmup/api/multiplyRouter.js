const express = require("express");
const multiplyRouter = express.Router();

multiplyRouter.get("/", async (req, res) => {
  const firstNumber = Number(req.query.first);
  const secondNumber = Number(req.query.second);
  if (firstNumber && secondNumber) {
    const result = firstNumber * secondNumber;
    res.send(`${result}`);
  } else {
    res.send("Error. Please enter valid values");
  }
});

module.exports = multiplyRouter;
