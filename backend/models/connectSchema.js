const mongoose=require('mongoose')

const connectSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true 
    },
   
    email:{
        type:String,
        required:true 
    },
    subject:{
        type:String,
        required:false 
    },
    message:{
        type:String,
        required:false
    }
})

const connects=mongoose.model('connects',connectSchema)
module.exports=connects