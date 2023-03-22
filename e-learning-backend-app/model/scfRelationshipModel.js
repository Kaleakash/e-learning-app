const mongoose=require('mongoose'); 
mongoose.pluralize(false);
//Admin Schema      
const scfRelashipSchema=new mongoose.Schema({
    student:{                                      
        type:String,
        required:true
    },
    course:{                                   
        type:String,
        required:true
    },
    faculty:{                                  
        type:String,
        required:true,
        default:"No Faculty"
    },
    status:{                                  
        type:String,
        required:true,
        default:"Pending"
    }
});

// exports admin
const scfRelationship=mongoose.model('SCFRelationship',scfRelashipSchema);
module.exports=scfRelationship;