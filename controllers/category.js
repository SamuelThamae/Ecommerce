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

const getCategoryById=async (req,res)=>{
    const {id}=req.params
    try{
        const catRecord=await Category.findById(id)
        return res.status(200).json({catRecord})
    }catch(error){
        console.error("There is an error in getting catergory by that id",error)
        return res.status(500).json({message:"Internal server error,please try again later"})
    }
}

const updateCategoryById=async (req,res)=>{
    const {id}=req.params
    try{
        const catRecord=await Category.findByIdAndUpdate(id,
            req.body,
            {
                new:true
            })
        return res.status(200).json({message:"Category updated successfully",catRecord})
    }catch(error){
        console.error("There is a error in updating the category with that id",error)
        return res.status(500).json({message:"Internal server error, please try again later"})
    }
}

const deleteById=async (req,res)=>{
    const {id}=req.params
    try{
        const catRecord=await Category.findByIdAndDelete(id)
        return res.status(200).json({message:"Category deleted successfully"})
    }catch(error){
        console.error("there is an error in deleting the catergory with that id",error)
        return res.status(500).json({message:"Internal server error,Please try again later"})
    }
}

module.exports={
    create:createCategory,
    getAll:getAllCategories,
    getOne:getCategoryById,
    update:updateCategoryById,
    deleteOne:deleteById
}