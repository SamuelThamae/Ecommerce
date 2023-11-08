const express=require('express')
const router=express.Router()
const product=require('../controllers/product')
const auth=require('../Services/CheckToken')

router.get('/',product.index)
.post('/',auth.tokenSend,auth.checkRole,product.addProduct)
.put('/:id',auth.tokenSend,auth.checkRole,product.update)
.get('/:id',auth.tokenSend,auth.checkRole,product.getOne)
.delete('/:id',auth.tokenSend,auth.checkRole,product.deleteOne)

module.exports=router