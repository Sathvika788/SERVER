const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{type:String,
        requried:true
    },email:{type:String,
        requried:true
    },password:{type:String,
        requried:true
    }
})
module.exports= mongoose.model('user',userSchema)