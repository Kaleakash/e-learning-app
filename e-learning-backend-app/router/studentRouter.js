const express=require('express');
const router=express.Router();
const studentController = require("../controller/studentController");

router.post("/create",studentController.createStudent);
router.post("/login",studentController.login);
router.get("/findAllStudent",studentController.findAllStudent);
router.get("/findStudentByEmail/:emailid",studentController.findStudentByEmailId);
router.get("/findStudentById/:_id",studentController.findStudentById);
router.delete("/deleteStudentById/:_id",studentController.deleteStudentById);
router.put("/changePassword",studentController.changePassword);

module.exports=router;