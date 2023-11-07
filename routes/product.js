const express=require('express')
const router=express.Router()
const product=require('../controllers/product')
const auth=require('../Services/CheckToken')

router.get('/',product.index)
.post('/',auth.tokenSend,auth.checkRole,product.addProduct)
.put('/',auth.tokenSend,auth.checkRole,product.update)
.get('/:id',auth.tokenSend,auth.checkRole,product.getOne)

module.exports=router