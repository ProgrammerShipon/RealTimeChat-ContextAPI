// terminal clear
console.clear()

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

// Database Call
const connectDB = require("./Config/db");
connectDB();

// Model use
const UserRouter = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const messageRoute = require("./Routes/messageRoute");

// using middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// root
app.get("/", (req, res) => {
  res.send("Welcome our chat app APIs..");
});

// users route
app.use("/api/users", UserRouter);

// users route
app.use("/api/chats", chatRoute);

// users route
app.use("/api/messages", messageRoute);

// Running Server
try {
  app.listen(port, async () => {
    console.log(`Server Running - http://localhost:${port}`);
  });
} catch (error) {
  console.log(error.message);
}
