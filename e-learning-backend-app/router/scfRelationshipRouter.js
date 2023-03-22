const express=require('express');
const router=express.Router();
const scrRelationshipController = require("../controller/scfRelationshipController");

router.post("/requestForCourse",scrRelationshipController.requestForCourse);
router.get("/viewCourseRequest/:emailid",scrRelationshipController.viewCourseRequest);
router.get("/viewCourseRequestByFaculty/:emailid",scrRelationshipController.viewCourseRequestByFaculty);
router.put("/updateRequestByFaculty",scrRelationshipController.studentRequestUpdateByTrainer);

module.exports=router;