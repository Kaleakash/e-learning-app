let courseModel = require("../model/courseModel");
let facultyModel = require("../model/facultyModel");
let relationshipModel = require("../model/scfRelationshipModel");

let mongoose = require('mongoose'); 
let Schema = mongoose.Types; 
let ObjectId = Schema.ObjectId

module.exports.addCourse = async function(req, res){
    let course = req.body;
    
    try{
        let result = await courseModel.insertMany(course)
    if(result){
        return res.status(200).json({
            message:"Course stored successfully",
            data:result
            });        
    }   
    }catch(err){
        return res.status(500).json({
            message: 'OOPS!! Error ',
            error:err
        });
    } 
}
module.exports.addTopicsInCourse = async function(req, res){
    let course = req.body;
    
    try{
        let result = await 
    courseModel.updateMany({course:course.courseName},
        {$push:{chapters:course.chapters}})
    console.log(result);
    if(result){
        return res.status(200).json({
            message:"Course stored successfully",
            data:result
            });        
    }   
    }catch(err){
        return res.status(500).json({
            message: 'OOPS!! Error ',
            error:err
        });
    } 
}
module.exports.viewCourse = async function(req, res){
    try{
        let result = await courseModel.find({})
    if(result){
        return res.status(200).json({
            message:"All course details are",
            data:result
            });        
    }   
    }catch(err){
        return res.status(500).json({
            message: 'OOPS!! Error ',
            error:err
        });
    } 
}

module.exports.viewCourseByFaculty = async function(req, res){
    let facultyEmailid = req.params.emailid
    let faculty = await facultyModel.findOne({emailid:facultyEmailid});
    console.log(faculty)
    try{
        let result = await courseModel.find({coursename:faculty.technologies});
        console.log(result);
    if(result){
        return res.status(200).json({
            message:"All course details are",
            data:result
            });        
    }   
    }catch(err){
        return res.status(500).json({
            message: 'OOPS!! Error ',
            error:err
        });
    } 
}

module.exports.viewCourseNames = async function(req, res){
    let courseName = req.params.cname;
    console.log(courseName);
    try{
        let result = await courseModel.find({coursename:courseName});
        console.log(result);
    if(result.length!=0){
        return res.status(200).json({
            message:"All course details are",
            data:result
            });        
    }else {
        return res.status(200).json({
            message:"No Course available"
            });
    }   
    }catch(err){
        return res.status(500).json({
            message: 'OOPS!! Error '+err.writeErrors
        });
    } 
}


module.exports.viewCourseByStudent = async function(req, res){
    try{
    let studentEmailid = req.params.emailid
    console.log(studentEmailid)
    let relationshipResult = await relationshipModel.find({$and:[{student:studentEmailid,status:"approved"}]});
    let result=[];
    console.log(relationshipResult);
    for(let i=0;i<relationshipResult.length;i++) {
        result[i] = await courseModel.findOne({coursename:relationshipResult[i].course});
    }
    console.log(result);
    if(result){
        return res.status(200).json({
            message:"All course details are",
            data:result
            });        
    }   
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: 'OOPS!! Error ',
            error:err
        });
    } 
}

module.exports.deleteCourseByName = async function(req, res){
    let courseName = req.params.cname;
    try{
        let result = await courseModel.deleteOne({coursename:courseName})
    if(result.deletedCount>0){
        return res.status(200).json({
            message:"Course record deleted successfully"
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


module.exports.deleteCourseById = async function(req, res){
    let courseId = new ObjectId(req.params._id);
    try{
        let result = await courseModel.deleteOne({_id:courseId})
    if(result.deletedCount>0){
        return res.status(200).json({
            message:"Course Record deleted succesfully"
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

module.exports.addChapter = async function(req, res){
    let courseId = new ObjectId(req.body._id);
    console.log('i came here')
    console.log(req.body)
    let data = req.body;
    let chapters = data.chapters
    console.log(data.chapters);
    console.log(data[0])
    // console.log(data[0].chapters)
    // console.log(req.body.chapters)
    try{
        let result = await courseModel.updateMany({_id:courseId},{$push:{chapters:chapters}})
        console.log(result);
        res.send(result);
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message: 'OOPS!! Error '+err
        });
    } 
}

// module.exports.findFacultyByEmailId = async function(req, res){
//     let facultyEmail = req.params.emailid;
//     try{
//         let result = await facultyModel.find({emailid:facultyEmail})
//     if(result.length!=0){
//         return res.status(200).json({
//             message:"Faculty Record is",
//             data:result
//             });        
//     }else {
//         return res.status(200).json({
//             message:"There is no record with emailid "+facultyEmail
//             });
//     }   
//     }catch(err){
//         return res.status(500).json({
//             message: 'OOPS!! Error '+err.writeErrors
//         });
//     } 
// }

// module.exports.deleteFacultyById = async function(req, res){
//     let facultyId = new ObjectId(req.params._id);
//     try{
//         let result = await facultyModel.deleteOne({_id:facultyId})
//     if(result.deletedCount>0){
//         return res.status(200).json({
//             message:"Faculty Record deleted succesfully"
//             });        
//     }else {
//         return res.status(200).json({
//             message:"There is no record present"
//             });
//     }   
//     }catch(err){
//         return res.status(500).json({
//             message: 'OOPS!! Error '+err
//         });
//     } 
// }

// module.exports.changePassword = async function(req, res){

//     let faculty = await facultyModel.findOne({emailid:req.body.emailid});
//     if(faculty){
    
//         if(faculty.password==req.body.password){
        
//             return res.status(200).json({
//                 message: "Password didn't update new password and old password are same"
//             });

//              }else {
//     let result = await facultyModel.updateOne({emailid:req.body.emailid},{$set:{password:req.body.password}})
//                     return res.status(200).json({
//                         message: "Password change successfully"
//                     });
//             }
     

//     }else {
       
//         return res.status(200).json({
//             message: "Record not present"
//         });

//     }
// }

// //Login for Faculty using email and password
// module.exports.login = async function(req, res){
//     if(req.body.emailid==undefined || req.body.password==undefined || req.body.typeofuser==undefined){
//         return res.status(201).json({
//             message:"Incomplete data provided"
//             });
//         }
         

//     try{
//         let admin = await adminModel.findOne({emailid:req.body.emailid});
//         console.log(admin);
//         if(admin){
//             let pass = req.body.password;
//             let pwdDb = admin.password;
//             if(pass==pwdDb){
//                 return res.status(200).json({
//                     message:"Succesfully login!",
//                     data:admin
//                     });
//             }
//         }
//         return res.status(201).json({
//             message:"Invalid emailid/password"
//             });
          
//     }
//     catch(err){
//         console.log(err);
//         return res.status(500).json({
//             message: 'OOPS!! Error'
//         });
//     }
// }