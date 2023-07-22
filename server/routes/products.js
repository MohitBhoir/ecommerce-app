const {getProducts,addProducts,
    updateProducts,removeProducts}=require('../controllers/products')
const express=require('express')
const router=express.Router()


router.route('/').get(getProducts).post(addProducts)
router.route('/:id').put(updateProducts).delete(removeProducts)

module.exports=router