const express=require('express')
const router=express.Router()
const Connects=require("../models/connectSchema")
const { body, validationResult } = require('express-validator');


router.get('/',(req,res)=>{
    res.send("hello world")
})



router.post('/connectrout', [
  body('name','enter a name').isAlpha(),
    body('name','cant be empty').notEmpty(),
    body('email','cant be empty').notEmpty(),
  body('email', 'Enter a valid email').isEmail(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
    try{
    const connect = await Connects.create({
    name: req.body.name,
    email: req.body.email,
    subject:  req.body.email,
    message: req.body.message,
    });        
    console.log(req.body)
      res.json(req.body)
  
      // // res.json(user)
      // res.json({ authtoken })
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
})

module.exports=router