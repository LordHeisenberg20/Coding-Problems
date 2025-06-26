const express = require("express");
const controller = require("../controllers/fileSytemControllers");
const router = express.Router();

router.post("/addNotes", controller.addNotes);

module.exports = router;
