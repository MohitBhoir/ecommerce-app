const {getReviews,addReviews}=require('../controllers/review')
const express=require('express')
const router=express.Router()
const authMiddleWare=require('../middleware/auth')


router.route('/').get(getReviews).post(authMiddleWare,addReviews)

module.exports=router