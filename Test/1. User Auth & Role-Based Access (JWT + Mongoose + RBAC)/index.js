const express = require("express");
const authRoutes = require("./router/authRoute");
const { connectDB } = require("./utils/db");
require("dotenv").config();

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.use("/auth", authRoutes)

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
