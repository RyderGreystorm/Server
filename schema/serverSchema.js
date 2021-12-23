const mongoose = require('mongoose')



const serverSchema=mongoose.Schema({ 
    first_name: {
       type: String,
        require: true
    },
    last_name: {type:String,
    require:true},
    date_of_birth: {type:String,
    require:true
},
    school: {type: String,
    require:true
        },
    
})

const User = mongoose.model('user', serverSchema);
module.exports= User;