const express = require("express");
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");
const { signUp, signIn } = require("../services/accountService");
const { error400sHandler } = require("../middlewares/errorHandlers");

const accountRouter = express.Router();
accountRouter.use(express.json());

accountRouter.post("/signup", asyncErrorHandler(signUp));

accountRouter.post("/signin", asyncErrorHandler(signIn));

module.exports = app => {
  app.use("/api/account", accountRouter, error400sHandler);
};
