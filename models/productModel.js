const mongoose=require('mongoose')
const mongoose = require('mongoose'); // Erase if already required

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
        enum:["Samsung","Blackberry","Nokia","Iphone"],
    },
    rating:{
        star:Number,
        postedby:{type:mongoose.Schema.Types.ObjectId},
        ref:"User"
    },
    price:{
        type:Number,
        required:true,
       
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true,
    },
    color:{
        type:Array,
        default:["red","yellow","green"],
    },
    availabilty:{
        type:Boolean,
        default:true,
    },
    dateCreated:{
        timestamps:true,
    }

});

//Export the model
module.exports = mongoose.model('Product', productSchema);