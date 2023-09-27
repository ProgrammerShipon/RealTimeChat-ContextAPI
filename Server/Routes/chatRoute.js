const {
  createChat,
  findUserChats,
  findChat,
  findAllUserChats,
} = require("../Controllers/chatController");

const chatRoute = require("express").Router();

// new Chat create
chatRoute.get("/", findAllUserChats);

// new Chat create
chatRoute.post("/", createChat);

// user chat open
chatRoute.get("/:userId", findUserChats);

// user chat open
chatRoute.get("/find/:firstId/:secondId", findChat);

module.exports = chatRoute;
