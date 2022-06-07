const express = require("express");
const app = express();

const addRouter = require("./api/addRouter");
const multiplyRouter = require("./api/multiplyRouter");
const divideRouter = require("./api/divideRouter");
const subtractRouter = require("./api/subtractRouter");

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use("/calculator/add", addRouter);

app.use("/calculator/multiply", multiplyRouter);

app.use("/calculator/divide", divideRouter);

app.use("/calculator/subtract", subtractRouter);

app.get("/", (request, response) => request.send("nodejs week3 homework"));

module.exports = app;
