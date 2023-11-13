const mongoose=require('mongoose')
const User =require('./usersModel')

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
       
    },
    description:{
        type:String,
        required:true,
       
    },
    brand:{
        type:String,
        requred:true
    },
    rating:{
        star:Number,
        postedby:{type:mongoose.Schema.Types.ObjectId,
        ref:"User"}
    },
    price:{
        type:Number,
        required:true,
       
    },
    images:{
        type:Array,
        default:[]
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        
    },
    color:{
        type:Array,
        default:[],
    },
    availabilty:{
        type:Boolean,
        default:true,
    },
   
},
    { timestamps: { createdAt: 'created_at' } }
);

//Export the model
module.exports = mongoose.model('Product', productSchema);