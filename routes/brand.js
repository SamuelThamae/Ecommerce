const express=require('express')
const router=express.Router()
const brand=require('../controllers/brand')
const auth=require('../Services/CheckToken')

router.post('/',auth.tokenSend,auth.checkRole,brand.create)
.get('/',brand.getAll)
.get('/:id',auth.tokenSend,auth.checkRole,brand.getOne)
.put('/:id',auth.tokenSend,auth.checkRole,brand.update)
.delete('/:id',auth.tokenSend,auth.checkRole,brand.deleteOne)

module.exports=router