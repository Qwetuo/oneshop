const mongoose = require("mongoose");
// const Store = require("./models/Store");
const User = require("./models/User");
const Review = require("./models/Review");

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

db.dropDatabase();

const seedData = async () => {
  const reviewer1 = new User({
    username: "reviewer1"
  });
  reviewer1.setHashedPassword("password");
  const newReviewer1 = await reviewer1.save();

  const reviewer2 = new User({
    username: "reviewer2"
  });
  reviewer2.setHashedPassword("password");
  const newReviewer2 = await reviewer2.save();

  const liker = new User({
    username: "igivelikes"
  });
  liker.setHashedPassword("password");
  const newLiker = await liker.save();

  // const kateSpade = new Store({
  //   name: "Kate Spade - Raffles City",
  //   reference: "ChIJp4zYJ6QZ2jER97uPLgjAX1U",
  //   location: "1.2937585, 103.85343310000007"
  // });

  // const newStoreKS = await kateSpade.save();

  const review1 = new Review({
    for: "ChIJp4zYJ6QZ2jER97uPLgjAX1U",
    rating: "5",
    review:
      "This wallet has a lot of space more than youd expect in looking at it. It’s slim and attractive to carry outside of your purse. Leather is great and will be durable.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71C+RcJofSL._SL1600_.jpg",
    author: newReviewer1._id,
    likes: [newReviewer2._id, newLiker._id]
  });
  const newReview1 = await review1.save();

  const review2 = new Review({
    for: "ChIJp4zYJ6QZ2jER97uPLgjAX1U",
    rating: "5",
    review:
      "Good quality, perfect size (not too big) fits perfectly in small and medium handbags and the design is very practical.",
    image: "https://images-na.ssl-images-amazon.com/images/I/715iry+dqXL.jpg",
    author: newReviewer2._id,
    likes: [newLiker._id]
  });
  const newReview2 = await review2.save();

  console.log("DONE INIT");
};

seedData();

module.exports = { seedData };
