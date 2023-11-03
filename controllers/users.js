const express=require('express')
const users=require('../models/usersModel')


const index=async (req,res)=>{
   try{  
    const email=req.body.email
 const userExist=await users.findOne({email:email})
    if(userExist){
        return res.status(403).json({message:'User already exist'})
    }else{
      const user= await users.create(req.body)
       return res.json(user)
    }
   }catch(error){
    console.error('There is an error in the registration',error)
    return res.status(500).json({message:'internal error in the server'})
   }
   
}

module.exports={
    index:index
}