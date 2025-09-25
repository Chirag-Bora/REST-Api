const expres = require("express");
const  router = expres.Router();
const { studentData, getStudentById, createStudent, updateStudent, deleteStudent } = require("../Controllers/authController");

router.get("/getalldata",studentData);
router.get("/get/:id",getStudentById);

router.post("/create", createStudent);
router.put("/update/:id",updateStudent);
router.delete("/delete/:id",deleteStudent);

module.exports = router;