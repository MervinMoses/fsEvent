const express=require('express')
const router=express.Router()
const GetQuote=require("../models/getQuoteSchema")
const { body, validationResult } = require('express-validator');


router.post('/getQuote', [
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
      const connect = await GetQuote.create({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      venue:  req.body.venue,
      tEvent: req.body.tEvent,
      eDate: req.body.eDate,
      budget:req.body.budget,
      nGuest: req.body.nGuest,

      comments: req.body.comments,
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