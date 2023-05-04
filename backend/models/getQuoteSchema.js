const mongoose=require('mongoose')

const getQuoteSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true
    },
    venue:{
        type:String,
        required: true
    },
    tEvent:{
        type:String,
        required:true
    },
    budget:{
        type:Number,
        required:true
    },
    eDate:{
        type:Date,
        required:true
    },
    nGuest:{
        type:String,
        required:true
    },
    comments:{
        type:String,
        required:false
    }
})

const connects=mongoose.model('getquotes',getQuoteSchema)
module.exports=connects
