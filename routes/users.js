const express=require('express')
const router=express.Router()
const auth=require('../Services/CheckToken')
const usersController=require('../controllers/users')

router.get('/',auth.tokenSend,auth.checkRole,usersController.index)
.put('/:id',auth.tokenSend,auth.checkRole,usersController.update)
.get('/:id',auth.tokenSend,auth.checkRole,usersController.getUser)
.delete('/:id',auth.tokenSend,auth.checkRole,usersController.deleteUser)
.post('/register',usersController.register)
.post('/login',usersController.login)
.put('/unblock/:id',auth.tokenSend,auth.checkRole,usersController.unblock)
.put('/block/:id',auth.tokenSend,auth.checkRole,usersController.blocked)
module.exports=router