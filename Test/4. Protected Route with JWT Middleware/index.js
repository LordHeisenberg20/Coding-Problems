const express = require("express");
const { connectDB } = require("./utils/db.js");
const router = require("./routes/authRoute.js");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", router);

app.listen(3000, () => {
  console.log("Server started on port http://localhost:3000");
});
