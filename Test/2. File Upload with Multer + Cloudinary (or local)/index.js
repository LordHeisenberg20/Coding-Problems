const express = require("express");
const uploadRoute = require("./route/uploadroute");
const { connectDB } = require("./utils/db");
const dotenv = require("dotenv");

dotenv.config(); 

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.use("/upload", uploadRoute);

app.listen(3000, () => {
  console.log("Server started on port http://localhost:3000");
});
