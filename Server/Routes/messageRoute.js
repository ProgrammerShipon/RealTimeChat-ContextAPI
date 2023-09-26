const { createMessage, getMessage, allMessages } = require("../Controllers/MessageController")

const messageRoute = require("express").Router()

// message create
messageRoute.get("/", allMessages);

// message create
messageRoute.post('/', createMessage)

// find chatting
messageRoute.get("/:chatId", getMessage);

module.exports = messageRoute