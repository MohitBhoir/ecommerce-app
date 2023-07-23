const asyncHandler=require('express-async-handler')
const Products=require('../models/products')

const getProducts=asyncHandler(async(req,res)=>{
    const products=await Products.find({user:req.user.id})
    if(!products){
        res.status(400) 
        throw new Error("you haven't selected any product yet !!")
    }
    res.status(200).json({data:products})
})

const addProducts=asyncHandler(async(req,res)=>{
    const product=await Products.create({
        brand:req.body.brand,
        name:req.body.name,
        price:req.body.price,
        user:req.user.id
    })
    
    res.status(200).json({data:product})
})

const updateProducts=asyncHandler(async(req,res)=>{
    res.status(200).json({msg:'update products'})
})

const removeProducts=asyncHandler(async(req,res)=>{
    const product=await Products.findById(req.params.id)
    if(!product){
        res.status(400)
        throw new Error("task not found")
    }

    if(!req.user){
        res.status(401)
        throw new Error('user not found')
    }
    // match the logged in user
    if(product.user.toString()!==req.user.id){
        res.status(401)
        throw new Error('user not authorized')
    }

    const deletedProduct=await Products.findByIdAndDelete(req.params.id)
    res.status(200).json({data:deletedProduct})
})


module.exports={getProducts,addProducts,updateProducts,removeProducts}