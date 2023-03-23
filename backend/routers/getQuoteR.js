const express=require('express')
const router=express.Router()
const GetQuote=require("../models/getQuoteSchema")
const { body, validationResult } = require('express-validator');


router.post('/getQuote', [
    body('email', 'Enter a valid email').isEmail(),
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
      try{
      const connect = await GetQuote.create({
      name: req.body.name,
      mobile: req.body.email,
      email: req.body.email,
      venue:  req.body.venue,
      sEvent: req.body.sEvent,
      nGuest: req.body.nGuest,
      eDate: req.body.eDate,
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