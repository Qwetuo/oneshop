const express = require("express");
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const { createReview, likeReview } = require("../services/reviewService");
const { error400sHandler } = require("../middlewares/errorHandlers");

const reviewRouter = express.Router();
reviewRouter.use(express.json());

// to use when user wants to create a review or post for the store
reviewRouter.post("/create/:id", asyncErrorHandler(createReview));

// to use when a user wants to like a review written by another
// futuretodo: route to get all like posts - to show wishlist
// futuretodo: improve user schema to allow follow + routes to explore following feed
reviewRouter.put("/like/:id", asyncErrorHandler(likeReview));

module.exports = app => {
  app.use("/api/review", reviewRouter, error400sHandler);
};