const express=require('express')
const router=express.Router()
const auth=require('../Services/CheckToken')
const usersController=require('../controllers/users')

router.get('/',auth.tokenSend,usersController.index)
.post('/register',usersController.register)
.post('/login',usersController.login)
.put('/:id',auth.tokenSend,usersController.update)
.get('/:id',auth.tokenSend,usersController.getUser)
.delete('/:id',auth.tokenSend,usersController.deleteUser)
.put('/unblock/:id',auth.tokenSend,usersController.unblock)
.put('/block/:id',auth.tokenSend,usersController.blocked)
module.exports=router