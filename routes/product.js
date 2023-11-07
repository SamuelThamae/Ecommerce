const express=require('express')
const router=express.Router()
const product=require('../controllers/product')
const auth=require('../Services/CheckToken')

router.get('/',product.index)
.post('/',auth.tokenSend,auth.checkRole,product.addProduct)


module.exports=router