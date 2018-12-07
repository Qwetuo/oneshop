const mongoose = require("mongoose");
const User = require("./User");

const ReviewSchema = new mongoose.Schema(
  {
    for: {
      type: String,
      required: true
    },
    rating: Number,
    review: String,
    image: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      validate: {
        validator(userId) {
          return User.findById(userId);
        },
        message: "Invalid User ID"
      }
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        validate: {
          validator(userId) {
            return User.findById(userId);
          },
          message: "Invalid User ID"
        }
      }
    ]
  },
  { timestamps: true }
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
