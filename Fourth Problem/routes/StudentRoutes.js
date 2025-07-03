const express = require("express");
const controller = require("../controllers/StudentsControllers");
const router = express.Router();

router.post("/addStudent", controller.addStudent);
router.get("/getSingleStudentThroughId/:id", controller.getSingleStudentThroughId);
router.get("/getSingleStudentThroughName/:name", controller.getSingleStudentThroughName);
router.get("/getAllStudents", controller.getAllStudents);
router.get("/getStudentsByQueries", controller.getStudentsByQueries);
router.put("/updateStudentThroughId/:id", controller.updateStudentThroughId);

module.exports = router;


