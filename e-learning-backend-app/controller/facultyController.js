let facultyModel = require("../model/facultyModel");

let mongoose = require('mongoose'); 
let Schema = mongoose.Types; 
let ObjectId = Schema.ObjectId

module.exports.createFaculty = async function(req, res){
    let faculty = req.body;
    
    try{
        let result = await facultyModel.insertMany(faculty)
    if(result){
        return res.status(200).json({
            message:"Faculty record stored successfully",
            data:result
            });        
    }   
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: 'OOPS!! Error '+err.writeErrors
        });
    } 
}

module.exports.findAllFaculty = async function(req, res){
    try{
        let result = await facultyModel.find({})
    if(result){
        return res.status(200).json({
            message:"All Faculty records are",
            data:result
            });        
    }   
    }catch(err){
        return res.status(500).json({
            message: 'OOPS!! Error '+err.writeErrors
        });
    } 
}

module.exports.findFacultyByEmailId = async function(req, res){
    let facultyEmail = req.params.emailid;
    try{
        let result = await facultyModel.find({emailid:facultyEmail})
        
    if(result.length!=0){
        return res.status(200).json({
            message:"Faculty Record is",
            data:result
            });        
    }else {
        return res.status(200).json({
            message:"There is no record with emailid "+facultyEmail
            });
    }   
    }catch(err){
        return res.status(500).json({
            message: 'OOPS!! Error '+err.writeErrors
        });
    } 
}

module.exports.deleteFacultyById = async function(req, res){
    let facultyId = new ObjectId(req.params._id);
    try{
        let result = await facultyModel.deleteOne({_id:facultyId})
    if(result.deletedCount>0){
        return res.status(200).json({
            message:"Faculty Record deleted succesfully"
            });        
    }else {
        return res.status(200).json({
            message:"There is no record present"
            });
    }   
    }catch(err){
        return res.status(500).json({
            message: 'OOPS!! Error '+err
        });
    } 
}

module.exports.changePassword = async function(req, res){

    let faculty = await facultyModel.findOne({emailid:req.body.emailid});
    if(faculty){
    
        if(faculty.password==req.body.password){
        
            return res.status(200).json({
                message: "Password didn't update new password and old password are same"
            });

             }else {
    let result = await facultyModel.updateOne({emailid:req.body.emailid},{$set:{password:req.body.password}})
                    return res.status(200).json({
                        message: "Password change successfully"
                    });
            }
     

    }else {
       
        return res.status(200).json({
            message: "Record not present"
        });

    }
}

//Login for Faculty using email and password
module.exports.login = async function(req, res){
    if(req.body.emailid==undefined || req.body.password==undefined || req.body.typeofuser==undefined){
        return res.status(201).json({
            message:"Incomplete data provided"
            });
        }
         

    try{
        let faculty = await facultyModel.findOne({emailid:req.body.emailid});
        console.log(faculty);
        if(faculty){
            let pass = req.body.password;
            let pwdDb = faculty.password;
            if(pass==pwdDb){
                return res.status(200).json({
                    message:"Succesfully login by Faculty!",
                    data:faculty
                    });
            }
        }
        return res.status(201).json({
            message:"Invalid emailid/password"
            });
          
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message: 'OOPS!! Error'
        });
    }
}