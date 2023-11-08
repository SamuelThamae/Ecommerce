const mongoose = require('mongoose'); 

// Declare the Schema of the Mongo model
var brandSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true  
    }
},
    {
        timestamps:true
    }
);

//Export the model
module.exports = mongoose.model('Brand', brandSchema);