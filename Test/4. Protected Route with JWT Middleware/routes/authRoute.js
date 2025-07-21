const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware");
const authController = require("../Controllers/authController");

router.get("/dashboard", verifyToken, authController.userRoutes);
router.post("/signup", authController.registerUser);
router.post("/login", authController.loginUser);

module.exports = router;
