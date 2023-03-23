const mongoose=require('mongoose')

const getQuoteSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    venue:{
        type:String,
        required: true
    },
    sEvent:{
        type:String,
        required:true
    },
    nGuest:{
        type:String,
        required:false
    },
    eDate:{
        type:Date,
        required:true
    },
    comments:{
        type:String,
        required:false
    }
})

const connects=mongoose.model('connect',getQuoteSchema)
module.exports=connects
