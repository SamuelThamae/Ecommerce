const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const  dbconnect=async()=>{
    try{
        
       const conn=await mongoose.connect(process.env.MongoDB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

       console.log("connection to the database granted")

    }catch(err){
    console.log(`Error -> ${err}` )
    }
}

module.exports=dbconnect

