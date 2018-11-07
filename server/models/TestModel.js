const mongoose = require("mongoose");

const TestModelSchema = new mongoose.Schema({
  data: String
});

const TestModel = mongoose.model("TestModel", TestModelSchema);

module.exports = TestModel;
