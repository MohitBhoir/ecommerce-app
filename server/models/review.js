const mongoose = require('mongoose');

const reviewsSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,  // _id present in mongoDB
        required:true,
        ref:'User'  // to identify which model this ObjectId belongs to
    },
    pName:{
        type:String,
    },
    review:{
         type:String
    },
    username:{
         type:String
    }
},{
    timestamps:true,
})

module.exports=mongoose.model('Reviews',reviewsSchema)