const express=require('express')
const Brand=require('../models/brandModel')

const createBrand=async (req,res)=>{
    try{
        const Record=await Brand.create(req.body)
        return res.status(200).json({message:"Category created successfully"})
    }catch(error){
        console.error("There is an error in creating new catergory",error)
        return res.status(500).json({message:"Internal server error"})
    }
}

const getAllBrand=async (req,res)=>{
    try{
        const Record=await Brand.find()
        return res.status(200).json({Record})
    }catch(error){
        console.error("There is an error in getting all categories",error)
        return res.status(500).json({message:"Internal server error, please try again later"})
    }
}

const getBrandById=async (req,res)=>{
    const {id}=req.params
    try{
        const Record=await Brand.findById(id)
        return res.status(200).json({Record})
    }catch(error){
        console.error("There is an error in getting catergory by that id",error)
        return res.status(500).json({message:"Internal server error,please try again later"})
    }
}

const updateBrandById=async (req,res)=>{
    const {id}=req.params
    try{
        const Record=await Brand.findByIdAndUpdate(id,
            req.body,
            {
                new:true
            })
        return res.status(200).json({message:"Category updated successfully",Record})
    }catch(error){
        console.error("There is a error in updating the category with that id",error)
        return res.status(500).json({message:"Internal server error, please try again later"})
    }
}

const deleteById=async (req,res)=>{
    const {id}=req.params
    try{
        const Record=await Brand.findByIdAndDelete(id)
        return res.status(200).json({message:"Category deleted successfully"})
    }catch(error){
        console.error("there is an error in deleting the catergory with that id",error)
        return res.status(500).json({message:"Internal server error,Please try again later"})
    }
}

module.exports={
    create:createBrand,
    getAll:getAllBrand,
    getOne:getBrandById,
    update:updateBrandById,
    deleteOne:deleteById
}