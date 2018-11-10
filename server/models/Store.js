const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "cannot be blank"]
    },
    reference: String,
    rating: Number,
    location: String,
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
      }
    ]
  },
  { timestamps: true }
);

const Store = mongoose.model("Store", StoreSchema);

module.exports = Store;
