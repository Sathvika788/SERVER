const mongoose = requrie('mongoose');
const productSchema = mongoose.Schema({
    imageURL:{type:String,
        requried:true
    },price:{type:Number,
        requried:true
    },name:{type:String,
        requried:true
    },descripiton:{type:String,
        requried:true
    }
})
module.exports= mongoose.model('product',productSchema)