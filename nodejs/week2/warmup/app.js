const express = require("express");
const app = express();
const addRouter = require("./api/addRouter");
const multiplyRouter = require("./api/multiplyRouter");

app.use("/numbers/add", addRouter);

app.use("/numbers/multiply", multiplyRouter);

app.get("/", (req, res) => res.send("nodejs week2 homework"));

module.exports = app;
