const express=require('express');
const router=express.Router();
const courseController = require("../controller/courseController");

router.post("/create",courseController.addCourse);
router.get("/view",courseController.viewCourse);
router.get("/viewCourseByStudent/:emailid",courseController.viewCourseByStudent);
router.get("/viewCourseName/:cname",courseController.viewCourseNames);
router.get("/findCourseByFaculty/:emailid",courseController.viewCourseByFaculty);
router.put("/addTopicsInCourse",courseController.addTopicsInCourse);
router.delete("/deleteCourseByName/:cname",courseController.deleteCourseByName);
router.delete("/deleteCourseById/:_id",courseController.deleteCourseById);
router.put("/addChapter",courseController.addChapter);
// router.get("/findFacultyByEmail/:emailid",facultyController.findFacultyByEmailId);
// router.delete("/deleteFacultyById/:_id",facultyController.deleteFacultyById);
// router.put("/changePassword",facultyController.changePassword);

module.exports=router;