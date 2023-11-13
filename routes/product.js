const express=require('express')
const router=express.Router()
const product=require('../controllers/product')
const auth=require('../Services/CheckToken')
const { imageUpload, ProductwithResize } = require('../Services/imageService')

router.get('/',product.index)
.get('/:id',product.getOne)
.post('/',auth.tokenSend,auth.checkRole,product.addProduct)
.put('/:id',auth.tokenSend,auth.checkRole,product.update)
.delete('/:id',auth.tokenSend,auth.checkRole,product.deleteOne)
.put('/upload/:id',auth.tokenSend,auth.checkRole,imageUpload.array("images",5,ProductwithResize),product.upload)
module.exports=router