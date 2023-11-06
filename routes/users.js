const express=require('express')
const router=express.Router()
const usersController=require('../controllers/users')

router.get('/',usersController.index)
.post('/register',usersController.register)
.post('/login',usersController.login)
.put('/:id',usersController.update)
.get('/:id',usersController.getUser)
.delete('/:id',usersController.deleteUser)
.put('/unblock/:id',usersController.unblock)
.put('/block/:id',usersController.blocked)
module.exports=router