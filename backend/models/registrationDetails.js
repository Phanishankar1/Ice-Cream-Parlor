const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const registrationSchema=new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phoneNo:{
        type:Number
    },
    password:{
        type:String
    },
    confirmpassword:{
        type:String
    }
})
module.exports= mongoose.model("registrations",registrationSchema);