const express=require('express')
const product=require('../models/productModel')
const slugify=require('slugify')

const getAllProducts=async (req,res)=>{
    try{
        const allProducts=await product.find()
        return res.status(200).json({allProducts})

    }catch(error){
        console.error("There is a error in getting all the products",error)
        return res.status(500).json({message:"Internal server error, please try again later"})
    }
}

const addProduct=async (req,res)=>{ 
    const data=req.body 
    try{
        if(req.body.title)
        {
            req.body.slug=slugify(req.body.title)
        }

        const record=await product.create(data)
        return res.status(200).json({message:"Product created successfully",record})

    }catch(error){
        console.error("There is an error in creating a new product",error)
        return res.status(500).json({message:"Internal server error,please try again later"})
    }
}

const updateProduct=async (req,res)=>{
    const {id}=req.params
    try{
        if(req.body.title)
        {
            req.body.slug=slugify(req.body.title)
        }
        const record=await product.findByIdAndUpdate(id,{
            title:req.body

        },{
        new:true
    })
    }catch(error){
        console.error("There is an error in updating product\n",error)
        return res.status(5000).json({message:"Internal server error"})
    }
}
module.exports={
    index:getAllProducts,
    addProduct:addProduct,
    update:updateProduct
}