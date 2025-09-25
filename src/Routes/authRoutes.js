const expres = require("express");
const  router = expres.Router();
const { studentData, getStudentById, createStudent, updateStudent } = require("../Controllers/authController");

router.get("/getalldata",studentData);
router.get("/get/:id",getStudentById);

router.post("/create", createStudent);
router.put("/update/:id",updateStudent);

module.exports = router;