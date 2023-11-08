const express=require('express')
const Category=require('../models/categoryModel')

const createCategory=async (req,res)=>{
    try{
        const catRecord=await Category.create(req.body)
        return res.status(200).json({message:"Category created successfully"})
    }catch(error){
        console.error("There is an error in creating new catergory",error)
        return res.status(500).json({message:"Internal server error"})
    }
}

const getAllCategories=async (req,res)=>{
    try{
        const catRecord=await Category.find()
        return res.status(200).json({catRecord})
    }catch(error){
        console.error("There is an error in getting all categories",error)
        return res.status(500).json({message:"Internal server error, please try again later"})
    }
}

module.exports={
    create:createCategory,
    getAll:getAllCategories
}