const User = require("../models/User");
const { jwtOptions } = require("../config/passport");
const jwt = require("jsonwebtoken");

const signUp = async (req, res, next) => {
  const { username, password } = req.body;
  if (password === "") {
    res.status(400).json({
      message: "Please enter a password"
    });
  }

  const user = new User({ username });

  user.setHashedPassword(password);
  const newUser = await user.save();

  const userId = { id: newUser._id };
  const token = jwt.sign(userId, jwtOptions.secretOrKey);

  res.cookie("jwt", token, {
    httpOnly: true
  });
  res
    .status(201)
    .json({ username: newUser.username, message: "User created successfully" });
};

const signIn = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });

  if (!user) {
    res.status(401).json({ message: "No such user found" });
  } else if (!user.verifyPassword(password)) {
    res.status(401).json({ message: "Incorrect password" });
  }

  const userId = { id: user._id };
  const token = jwt.sign(userId, jwtOptions.secretOrKey);

  res.cookie("jwt", token, {
    httpOnly: true
  });
  res.status(200).json({ username: user.username, message: "ok" });
};

module.exports = {
  signUp,
  signIn
};
