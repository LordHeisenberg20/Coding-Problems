const user = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const registerUser = async (req, res) => {
  try {
    const {email, password } = req.body;
   
    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    
    const existingUser = await user.findOne({ email });
   
    if (existingUser) {
      return res.status(400).json({ error: "User exists already" });
    }

    const hash = await bcrypt.hash(password, 10);

    await user.create({email, password: hash });

    res.status(201).json({ message: "User created successfully" });
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await user.findOne({ email });
   
    if (!existingUser) {
      return res.status(400).json({ error: "User does not exist" });
    }

    const isMatched = await bcrypt.compare(password, existingUser.password);
   
    if (!isMatched) {
      return res.status(400).json({ error: "Wrong password" });
    }

    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      process.env.SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({ message: "Logged in successfully", token });
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const userRoutes = async (req, res) => {
  try {
    res.status(200).json({ user: req.user });
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerUser, loginUser, userRoutes };
