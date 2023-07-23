const asyncHandler=require('express-async-handler')
const Reviews=require('../models/review')

const getReviews=asyncHandler(async(req,res)=>{
    const products=await Reviews.find({})
    if(!products){
        res.status(400) 
        throw new Error("no reviews yet")
    }
    res.status(200).json({data:products})
})

const addReviews=asyncHandler(async(req,res)=>{
    const product=await Reviews.create({
        pName:req.body.pName,
        review:req.body.review,
        username:req.body.username,
        user:req.user.id
    })
    
    res.status(200).json({data:product})
})

module.exports={getReviews,addReviews}