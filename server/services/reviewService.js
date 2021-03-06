const Review = require("../models/Review");
// const Store = require("../models/Store");

const getReviews = async (req, res, next) => {
  const storeReviews = await Review.find({ for: req.params.store })
    .populate({ path: "author", select: "username" })
    .populate({ path: "likes", select: "username" });
  res.status(200).json(storeReviews);
};

//todo - write tests for services
const createReview = async (req, res, next) => {
  const newReview = new Review({
    for: req.params.store,
    rating: req.body.rating,
    review: req.body.review,
    image: req.body.image,
    author: req.user._id
  });
  const savedReview = await newReview.save();
  const payload = await Review.findById(savedReview._id).populate({
    path: "author",
    select: "username"
  });

  res.status(201).json({
    message: "review successfully logged",
    payload
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
  likeReview,
  getReviews
};
