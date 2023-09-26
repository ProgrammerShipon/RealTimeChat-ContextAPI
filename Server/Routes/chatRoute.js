const {
  createChat,
  findUserChats,
  findChat,
} = require("../Controllers/chatController");

const chatRoute = require("express").Router();

// new Chat create
chatRoute.post("/", createChat);

// user chat open
chatRoute.get("/:userId", findUserChats);

// user chat open
chatRoute.get("/find/:firstId/:secondId", findChat);

module.exports = chatRoute;
