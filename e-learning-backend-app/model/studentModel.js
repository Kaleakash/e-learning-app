const mongoose=require('mongoose'); 
mongoose.pluralize(false);
//Student Schema      
const studentSchema=new mongoose.Schema({
    _id:{
        type:Object,
        required:false
    },
    fname:{                                      
        type:String,
        required:true
    },
    lname:{                                      
        type:String,
        required:false
    },
    gender:{                                      
        type:String,
        required:true
    },
    graduation:{                                      
        type:String,
        required:true
    },
    phonenumber:{                                      
        type:String,
        required:true
    },
    emailid:{                                      
        type:String,
        required:true,
        unique:true
    },
    password:{                                   
        type:String,
        required:true
    },
    typeofuser:{                                  
        type:String,
        required:true
    }

});

// exports student
const Student=mongoose.model('Student',studentSchema);
module.exports=Student;