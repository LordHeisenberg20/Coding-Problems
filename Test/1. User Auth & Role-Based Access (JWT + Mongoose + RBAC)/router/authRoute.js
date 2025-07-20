const express = require("express");
const router = express.Router();
const { requireRole } = require("../middleware");
const authController = require("../controllers/authControllers");

router.get("/only-Admin", requireRole("admin"), authController.forOnlyAdmin);
router.get("/only-User", requireRole("user"), authController.forOnlyUser);
router.post("/signup-User", authController.registerUser);
router.post("/login-User", authController.loginUser);

module.exports = router;
