const express=require('express')
const router=express.Router()
const category=require('../controllers/category')
const auth=require('../Services/CheckToken')

router.post('/',auth.tokenSend,auth.checkRole,category.create)
.get('/',category.getAll)
.get('/:id',auth.tokenSend,auth.checkRole,category.getOne)

module.exports=router