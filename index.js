const express=require("express")
const app=express()
require('dotenv').config()
const bodyParser=require("body-parser")
const cors=require('cors')
const PORT=process.env.PORT || 1343


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:'http://localhost:4200'}))

const usersRouter=require('./routes/users')
app.use('/api/users/',usersRouter)


app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`)
})

