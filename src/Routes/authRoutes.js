const expres = require("express");
const  router = expres.Router();
const { studentData, getStudentById, createStudent } = require("../Controllers/authController");

router.get("/getalldata",studentData);
router.get("/get/:id",getStudentById);

router.post("/create", createStudent);


module.exports = router;