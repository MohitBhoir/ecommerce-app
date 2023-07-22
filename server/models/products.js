const mongoose = require('mongoose');

const productsSchema=mongoose.Schema({
    product:{
        type:String,
        required:[true,'please add the item']
    },
    amount:{
        type:String
    }
},{
    timestamps:true,
})

module.exports=mongoose.model('Products',productsSchema)