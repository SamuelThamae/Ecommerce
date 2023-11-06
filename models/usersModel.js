const mongoose = require('mongoose');
const bcrypt=require('bcrypt')

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true,
    },
    LastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:'user',
    },
    cart:{
        type:Array,
        default:[],
    },
    wishlist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
       
    },
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address",
    },
   status:{
        type:Boolean,
        default:true,
    }
});

userSchema.pre("save",async function(next){
    const salt= await bcrypt.genSaltSync(10)
    this.password=await bcrypt.hash(this.password,salt)
})
userSchema.methods.comparePassword=async function(enteredPassord){
   
    return await bcrypt.compare(enteredPassord,this.password)
}


//Export the model
module.exports = mongoose.model('User', userSchema);