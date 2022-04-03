require("dotenv").config();

const jwt = require("jsonwebtoken");

const User= require("../model/user.model");
const router = require("./user.controller");

const { body, validationResult } = require('express-validator');







const newToken = (user)=>{
    return jwt.sign({user}, process.env.JWT_SECRET_KEY)
}

const register=  async (req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        let user= await User.findOne({email: req.body.email}).lean().exec()

       if(user)
           res.status(400).send({message:"try another email"})
       

        user =  await User.create(req.body)


        const token = newToken(user)

        res.send({user, token})
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const login = async (req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }


        const user = await User.findOne({email:req.body.email});

        if(!user){
            return res.status(400)
            .send({message:"please try another email or password"})
        }

        const match = req.body.password

        if(!match)  
        return res.status(400)
        .send({message:"please try another email or password"})

        const token = newToken(user)


        res.send({user, token})
    } catch (err) {
        res.status(500).send(err.message)
    }
}

module.exports= {register, login}