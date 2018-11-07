const app = require("./app");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const mongodbUri =
  process.env.MONGODB_URI || "mongodb://localhost:27017/oneshop";

mongoose.connect(
  mongodbUri,
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on("error", error => {
  console.error("An error occured!", error);
});

const server = app.listen(PORT, () => {
  console.log("Listening on port " + server.address().port);
});
