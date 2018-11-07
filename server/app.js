const express = require("express");
const bodyParser = require("body-parser");

const TestModel = require("./models/TestModel");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/", (req, res, next) => {
  res.json("welcome");
});

app.post("/api/new", async (req, res, next) => {
  try {
    const data = await TestModel.create({
      data: req.body.data
    });
    res.status(201).json(data);
  } catch (error) {
    res.json(error);
  }
});

app.get("/api/data", async (req, res, next) => {
  const data = await TestModel.find();
  res.status(200).json(data);
});

module.exports = app;
