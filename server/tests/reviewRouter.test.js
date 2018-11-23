const app = require("../app");
const User = require("../models/User");
const Review = require("../models/Review");
const request = require("supertest");
const {
  setupMemoryServer,
  tearDownMemoryServer,
  resetMemoryServer
} = require("./utils");

beforeAll(setupMemoryServer);
afterAll(tearDownMemoryServer);
beforeEach(resetMemoryServer);

const setUpTestScenario = async () => {
  const reviewer1 = new User({
    username: "newReviewer1"
  });
  reviewer1.setHashedPassword("password");
  const newReviewer1 = await reviewer1.save();

  const reviewer2 = new User({
    username: "newReviewer2"
  });
  reviewer2.setHashedPassword("password");
  const newReviewer2 = await reviewer2.save();

  const review1 = new Review({
    for: "ChIJp4zYJ6QZ2jER97uPLgjAX1U",
    rating: "5",
    review:
      "This wallet has a lot of space more than youd expect in looking at it. It’s slim and attractive to carry outside of your purse. Leather is great and will be durable.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71C+RcJofSL._SL1600_.jpg",
    author: newReviewer1._id,
    likes: [newReviewer2._id]
  });
  const newReview1 = await review1.save();

  const review2 = new Review({
    for: "ChIJp4zYJ6QZ2jER97uPLgjAX1U",
    rating: "5",
    review:
      "Good quality, perfect size (not too big) fits perfectly in small and medium handbags and the design is very practical.",
    image: "https://images-na.ssl-images-amazon.com/images/I/715iry+dqXL.jpg",
    author: newReviewer2._id
  });
  const newReview2 = await review2.save();
};

test("/api/review/all/:store should return all the reviews for the store with refernce id :store", async () => {
  await setUpTestScenario();

  const response = await request(app).get(
    "/api/review/all/ChIJp4zYJ6QZ2jER97uPLgjAX1U"
  );
  expect(response.body.length).toBe(2);
  expect(response.body[0].author.username).toBe("newreviewer1");
  expect(response.body[0].likes[0].username).toBe("newreviewer2");
});
