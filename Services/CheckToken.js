const jwt=require('jsonwebtoken')
const express=require('express')
const user=require('../models/usersModel')

const tokenSend=async (req,res,next)=>{
    const tokenHeader=req.headers['authorization']
    const token=tokenHeader && tokenHeader.split(' ')[1]
    if(token==null || tokenHeader== "undefined")
    {
      
        return res.status(404).json({message:'Token could not be verified'})
    }
    else{
        jwt.verify(token,process.env.JWTtoken,(err,result)=>{
            if(err)
            {
                return res.status(404).json({message:"Token is invalid"})
            }
            else{
                res.userActive=result
            }

        })
        next()
    }
}
module.exports={
    tokenSend
}