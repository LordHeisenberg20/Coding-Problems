const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Upload", uploadSchema);
