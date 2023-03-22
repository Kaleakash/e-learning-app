const express=require('express');
const router=express.Router();
const facultyController = require("../controller/facultyController");

router.post("/create",facultyController.createFaculty);
router.post("/login",facultyController.login);
router.get("/findAllFaculty",facultyController.findAllFaculty);
router.get("/findFacultyByEmail/:emailid",facultyController.findFacultyByEmailId);
router.delete("/deleteFacultyById/:_id",facultyController.deleteFacultyById);
router.put("/changePassword",facultyController.changePassword);

module.exports=router;