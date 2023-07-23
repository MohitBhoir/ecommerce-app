const mongoose = require('mongoose');

const productsSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,  // _id present in mongoDB
        required:true,
        ref:'User'  // to identify which model this ObjectId belongs to
    },
    brand:{
        type:String,
    },
    name:{
         type:String
    },
    price:{
         type:String
    }
},{
    timestamps:true,
})

module.exports=mongoose.model('Products',productsSchema)