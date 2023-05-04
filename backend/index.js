const express=require('express')
const bodyparser=require('body-parser')
const router=express.Router()
const connectToMongo=require('./db')
const dotenv=require('dotenv')
dotenv.config({ path:'./config.env'})
const routs=require('./routers/connectrout')
const getQuote=require('./routers/getQuoteR')

const cors=require('cors')

const app=express()
app.use(cors())


app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
connectToMongo();

// const app=express()
const Host=process.env.Host;


app.use('/',routs)
app.use('/',getQuote)



 

app.get('/about',(req,res)=>{
    res.send("hello about")
})

app.listen(Host,()=>
{
    console.log(`server is running ${Host}`)
})