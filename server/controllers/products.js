const asyncHandler=require('express-async-handler')
const Products=require('../models/products')

const getProducts=asyncHandler(async(req,res)=>{
    const products=await Products.find({})
    res.status(200).json({data:products})
})

const addProducts=asyncHandler(async(req,res)=>{
    const product=await Products.create({
        product:req.body.product,
        amount:req.body.amount,
    })
    
    res.status(200).json({data:product})
})

const updateProducts=asyncHandler(async(req,res)=>{
    res.status(200).json({msg:'update products'})
})

const removeProducts=asyncHandler(async(req,res)=>{
    res.status(200).json({msg:'remove products'})
})


module.exports={getProducts,addProducts,updateProducts,removeProducts}