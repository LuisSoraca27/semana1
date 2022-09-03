const express = require("express");
const userRouter = express.Router();

const {
  createRegistration,
  getAllregistration,
  updateRegistration,
  getOneRegistration,
  updateStatusRegistration,
} = require("../controllers/registration.controller");

userRouter.get("/", getAllregistration);
userRouter.get("/:id", getOneRegistration);
userRouter.post("/", createRegistration);
userRouter.patch("/:id", updateRegistration);
userRouter.delete("/:id", updateStatusRegistration);

module.exports = {
  userRouter,
};
