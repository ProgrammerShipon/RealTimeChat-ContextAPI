const mongoose = require("mongoose");
require('dotenv').config()

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  try {
    await mongoose
      .connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "World_Chat",
      })
      .then(() => console.log("Database connection successful"))
      .catch((err) => console.log(err));
  } catch (error) {
    console.error("Could not connect to DB: ", error);
  }
};

module.exports = connectDB;
