const express=require('express')
const product=require('../models/productModel')
const slugify=require('slugify')

const getAllProducts=async (req,res)=>{
    
    try{
        const allProducts=await product.find(req.query)
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
    const id=req.params.id
    try{    
        const record=await product.findByIdAndUpdate(id,req.body,{new:true})
    return res.status(200).json({record})
    }catch(error){
        console.error("There is an error in updating product\n",error)
        return res.status(500).json({message:"Internal server error"})
    }
}

const getProductById=async (req,res)=>{
    const {id}=req.params
    try{
        const record=await product.findById(id)
        if(record==null)
        {
            return res.status(404).json({message:"Result not found"})
        }
        return res.status(200).json({record})
    }catch(error){
        console.error("There is an error in getting the record",error)
        return res.status(500).json({message:"Internal server error"})
    }
}
const deteleProductById=async (req,res)=>{
    const {id}=req.params
    try{
        const record=await product.findByIdAndDelete(id)
        if(record==null)
        {
            return res.status(404).json({message:"Result not found"})
        }
        return res.status(200).json({message:"Product deleted successfully"})
    }catch(error){
        console.error("There is an error in deleting the product",error)
        return res.status(500).json({message:"Internal server error"})
    }
}

const productImages=async (req,res)=>{
    const {id}=req.params
    console.log(req.files)
    try{
        const urls=[];
        const files=req.files
        
        for(const file of files)
        {
            urls.push(file.path)
        }

        const oneRecord=await product.findByIdAndUpdate(id,
          {
            images:urls.map((file)=>{
                return file
            }),
          },{new:true}
            )

    return res.status(200).json({oneRecord})
    }catch(error)
    {
        console.error("There is an error in uploading this picture",error)
        return res.status(500).json({message:"Internal server error"})
    }

}
module.exports={
    index:getAllProducts,
    addProduct:addProduct,
    update:updateProduct,
    getOne:getProductById,
    deleteOne:deteleProductById,
    upload:productImages
}