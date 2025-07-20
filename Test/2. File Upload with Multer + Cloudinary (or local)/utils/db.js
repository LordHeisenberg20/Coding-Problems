const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/myDatabase2");
    console.log("Database connected");
  } catch (error) {
    console.error("error while connecting database", error.message);
  }
}

module.exports = {
  connectDB
};
