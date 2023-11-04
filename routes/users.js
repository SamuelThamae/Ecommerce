const express=require('express')
const router=express.Router()
const usersController=require('../controllers/users')

router.post('/',usersController.register)
.post('/login',usersController.login)
.get('/',usersController.index)
.put('/:id',usersController.update)

module.exports=router