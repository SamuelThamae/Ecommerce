const express=require('express')
const jwt=require('jsonwebtoken')

const index= async (req,res)=>{
    res.send("user index works")
}

module.exports={
    index:index
}