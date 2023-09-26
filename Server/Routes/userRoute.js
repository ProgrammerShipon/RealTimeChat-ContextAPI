const express = require("express");
const { registerUser, loginUser, findUser, getAllUsers } = require("../Controllers/UserController");
const UserRouter = express.Router();

// user register
UserRouter.post("/register", registerUser);

// user login
UserRouter.post("/login", loginUser);

// find user
UserRouter.get("/find/:userId", findUser);

// find all users
UserRouter.get("/", getAllUsers);

module.exports = UserRouter