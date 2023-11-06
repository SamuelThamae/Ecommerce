const express=require('express')
const router=express.Router()
const product=require('../models/productModel')
const auth=require('../Services/CheckToken')

router.get('/',auth.tokenSend,productController.index)


module.exports=router