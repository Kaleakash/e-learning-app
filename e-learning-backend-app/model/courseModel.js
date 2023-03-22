const mongoose=require('mongoose'); 
mongoose.pluralize(false);
//Course Schema
const courseChapter = new mongoose.Schema({
    chapterNumber:{
        type:Number,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    topicContents:{
        type:String,
        required:true
    }
});

const courseSchema=new mongoose.Schema({
    _id:{
        type:Object,
        required:false
    },
    coursename:{                                      
        type:String,
        required:true,
        unique:true
    },
    chapters:[courseChapter]
});

// exports Course
const Course=mongoose.model('Course',courseSchema);
module.exports=Course;