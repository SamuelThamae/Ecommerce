const express=require('express')
const users=require('../models/usersModel')
const jwt=require('jsonwebtoken')


const register=async (req,res)=>{
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

const login=async (req,res)=>{
   try{
      const {email,password}=req.body
      const userExist=await users.findOne({email:email})
      if(!userExist){
         return res.status(404).json({message:'Invalid creditials'})
      }else{
         const checkPass= await userExist.comparePassword(password)

         
         if(checkPass)
         {
            const user={
               mobile:userExist.mobile,
               email:userExist.email,
               FirstName:userExist.FirstName,
               LastName:userExist.LastName,
               role:userExist.role,
               status:userExist.status
            }

            const token=jwt.sign(user,process.env.JWTtoken,{expiresIn:"24h"})
            
            return res.status(200).json({token})
         }else{
            return res.status(403).json({message:'Invalid creditials'})
         }
         

      }
   }catch(error){
      console.error('Ther is an error in the login',error)
      return res.status(500).json({message:'internal error in the server'})
   }
}

const allUsers= async (req,res) =>{
   try{
      const allUsers=await users.find()
      return res.status(200).json({allUsers}) 
   }catch(error){
      console.error("There is an error in getting all users",error)
      return res.status(500).json({message:"Internal error in the server"})
   }
}

const updateUser=async(req,res)=>{
  const {id}=req.params
  try{
      const updateRecord=await users.findByIdAndUpdate(id,
         {
            FirstName: req?.body?.FirstName,
            LastName:req?.body?.LastName,
            mobile:req?.body?.mobile,
            email:req?.body?.email,
         },{
            new:true
         })
         return res.status(200).json({message:"record was successfully updated"})
   }catch(error)
   {
      console.error("There is a error in updating user\n",error)
      return res.status(500).json({message:'Internal error in the server'})
   }
}

const getUserById=async (req,res)=>{
   const {id}=req.params
   try{
      const userRecord=await users.findById(id)
      if(userRecord){
         return res.status(200).json({userRecord})
      }else{
         return res.status(404).json({message:`No user found with this id ${id}`})
      }
   }catch(error){
      console.error("There is an error in getting one user",error)
      return res.status(500).json({message:"Internal error in the server"})
   }
}

const deleteUserById=async (req,res)=>{
   const {id}=req.params
   try{
      const recordDeleted=await users.findByIdAndDelete(id)
      return res.status(200).json({message:"User deleted successfully"})
   }catch(error){
      console.error(`There is an error in deleting user`,error)
      return res.status(500).json({message:"internal error in the server"})
   }
}
const unblockUserById=async(req,res)=>{
   const {id}=req.params
   
   try{
      const updateRecord=await users.findByIdAndUpdate(id,
         {
            status:true
         },{
            new:true
         })
         return res.status(200).json({message:'User is unblocked'})
   }catch(error){
      console.error(`There is an error in unblocking the user`,error)
      return res.status(500).json({message:'Internal server error, please try again later'})
   }
}
const blockUserById=async(req,res)=>{
   const {id}=req.params
  
   try{
      const updateRecord=await users.findByIdAndUpdate(id,
         {
            status:false
         },{
            new:true
         })

         return res.status(200).json({message:'User is blocked successfully'})
   }catch(error){
      console.error(`There is an error in blocking the user`,error)
      return res.status(500).json({message:'Internal server error, please try again later'})
   }
}

const updateRoleById=async (req,res)=>{
   const {id}=req.params
   try{
      const record=await users.findByIdAndUpdate(id,{
         role:req?.body?.role
      },
      {
         new:true
      })
      return res.status(200).json({message:"Role updated successfully"})
   }catch(error){
      console.log("There is an error in updating the user role",error)
      return res.status(500).json({message:"Internal server error, please try again later"})
   }
}

module.exports={
    register:register,
    login:login,
    index:allUsers,
    update:updateUser,
    getUser:getUserById,
    deleteUser:deleteUserById,
    blocked:blockUserById,
    unblock:unblockUserById,
    updateRole:updateRoleById
}