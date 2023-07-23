const {getProducts,addProducts,
    updateProducts,removeProducts}=require('../controllers/products')
const express=require('express')
const router=express.Router()
const authMiddleWare=require('../middleware/auth')


router.route('/').get(authMiddleWare,getProducts).post(authMiddleWare,addProducts)
router.route('/:id').put(updateProducts).delete(authMiddleWare,removeProducts)

module.exports=router