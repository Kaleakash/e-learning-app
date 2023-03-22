let csfRelationshipModel = require("../model/scfRelationshipModel");
let facultyModel = require("../model/facultyModel");
module.exports.requestForCourse = async function(req, res){
    let courseRequest = req.body;
    try{
    let result = await csfRelationshipModel.insertMany(courseRequest)
    if(result){
    
        res.json({"msg":"Request send successfully"})
        
    }
    
    }catch(ex){
        res.json({"msg":"Error generated"+ex})

    }
}

module.exports.viewCourseRequest = async function(req, res){
    let studentEmailId = req.params.emailid;
    try{
    let result = await csfRelationshipModel.find({student:studentEmailId})
    if(result){
    
        res.json({"msg":"Student Request Courses",data:result})
        
    }
    
    }catch(ex){
        res.json({"msg":"Error generated"+ex})

    }
}


module.exports.viewCourseRequestByFaculty = async function(req, res){
    let facultyEmailId = req.params.emailid;
    let faculty = await facultyModel.findOne({emailid:facultyEmailId});
    try{
    let result = await csfRelationshipModel.find({course:faculty.technologies})
    if(result){
        
        res.json({"msg":"Student Request Courses",data:result})
        
    }
    
    }catch(ex){
        console.log(ex)
        res.json({"msg":"Error generated"+ex})

    }
}


module.exports.studentRequestUpdateByTrainer = async function(req, res){
    let relationshipUpdate = req.body;
    console.log(relationshipUpdate);
    try{
    let result = await csfRelationshipModel.updateOne({$and:[{student:relationshipUpdate.student},{course:relationshipUpdate.course}]},{$set:{faculty:relationshipUpdate.faculty,status:relationshipUpdate.status}})
    console.log(result);
    if(result){
        
        res.json({"msg":"Student Request Update by Faculty",data:result})
        
    }
    
    }catch(ex){
        console.log(ex)
        res.json({"msg":"Error generated"+ex})

    }
}