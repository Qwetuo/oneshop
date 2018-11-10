const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    for: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Store"
    },
    rating: Number,
    review: String,
    image: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
