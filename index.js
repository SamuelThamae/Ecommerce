const express= require('express')
const app=express()
const bodyParser=require("body-parser")
const cors=require('cors') 
const mongoose=require('mongoose')
const dbconnect=require('./config/db')
require('dotenv').config();

const PORT=process.env.PORT || 1343


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors({origin:'http://localhost:4200'}))

dbconnect();



const usersRouter=require('./routes/users')

app.use('/api/users/',usersRouter)


app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`)
})

