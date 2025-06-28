const express = require("express");
const mongoose = require("mongoose");
const students = require("./students");

const app = express();
app.use(express.json());

function connectToDatabase() {
  mongoose
    .connect("mongodb://localhost:27017/StudentsDatabase")
    .then(() => console.log("Database connected"))
    .catch((err) => console.error("Database connection error:", err));
}

connectToDatabase();

app.post("/addstudent", async (req, res) => {
  try {
    const { name, rollNo, branch, marks, email } = req.body;
    const newStudent = new students({
      name,
      rollNo,
      branch,
      marks,
      email,
    });

    await newStudent.save();
    res.status(201).send("Student's data was added successfully");
  } catch (error) {
    res.status(400).send(`Cannot Add Student because: ${error.message}`);
  }
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
