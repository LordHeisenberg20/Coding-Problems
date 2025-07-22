const express = require("express");
const router = express.Router();
const { createBlog } = require("../controllers/blogControllers");
const authControllers = require("../controllers/authControllers");
const upload = require("../multer");
const { verifyToken, requireRole } = require("../middleware");

router.post("/createblog",verifyToken, requireRole("admin", "author"), upload.single("image"), createBlog);
router.post("/Signup", authControllers.registerUser);
router.post("/Login", authControllers.loginUser);

module.exports = router;
