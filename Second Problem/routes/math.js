const express = require("express");
const controller = require("../controllers/arithmeticControllers");
const router = express.Router();

router.post("/add", controller.addition);
router.post("/sub", controller.subtraction);
router.post("/mul", controller.multiplication);
router.post("/div", controller.division);
router.post("/sqrt", controller.sqrt);

module.exports = router;
