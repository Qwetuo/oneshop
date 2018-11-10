const Review = require("../models/Review");

//todo - write tests for services
const createReview = async (req, res, next) => {
  const newPost = await new Review.create({
    for: req.param.id,
    rating: req.body.rating,
    review: req.body.review,
    image: req.body.image,
    author: req.user._id
  });

  res.status(201).json({
    message: "review successfully logged"
  });
};

const likeReview = async (req, res, next) => {
  const review = await Review.findById(req.params.id);
  if (review.likes.indexOf(`${req.user._id}`) >= 0) {
    res.status(400).json({ message: "you have liked this review before" });
  } else {
    await Review.findByIdAndUpdate(req.params.id, {
      likes: [...review.likes, req.user._id]
    });
    res.status(200).json({ message: "successfully liked the review" });
  }
};

module.exports = {
  createReview,
  likeReview
};
