import mongoose from "mongoose";
const Schema=mongoose.Schema
const Ice =new Schema({
    title:{
        type:String,
        required:true
    },    
    price:{
        type:String,
        required:true
    },
   
    productpic:{
        type:String,
        required:true
    }
   
})
export default  mongoose.model('menu',Ice)