const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const { errorHandler } = require("./middlewares/errorHandlers");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const staticFiles = express.static(path.join(__dirname, "../client/build"));

if (process.env.NODE_ENV === "production") {
  app.use(staticFiles);
}

const accountRouter = require("./routes/accountRouter");
const reviewRouter = require("./routes/reviewRouter");

accountRouter(app);
reviewRouter(app);

app.use(errorHandler);

module.exports = app;
