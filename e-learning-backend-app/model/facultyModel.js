const mongoose=require('mongoose'); 
mongoose.pluralize(false);
//Faculty Schema      
const facultySchema=new mongoose.Schema({
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
    technologies:{                                      
        type:[String],
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

// exports faculty
const Faculty=mongoose.model('Faculty',facultySchema);
module.exports=Faculty;