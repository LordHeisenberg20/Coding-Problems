const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },

    rollNo: {
      type: Number,
      required: [true, "Roll number is required"],
    },

    branch: {
      type: String,
      required: [true, "Branch is required"],
      enum: ["CSE", "IT", "ME"],
    },

    marks: {
      type: Number,
      required: [true, "Marks are required"],
      min: [0, "Marks cannot be less than 0"],
      max: [100, "Marks cannot exceed 100"],
    },
    
    email: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const students = mongoose.model("Students", studentsSchema);

module.exports = students;
