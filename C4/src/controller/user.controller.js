const express = require("express");

const User = require("../model/user.model");

const router = express.Router();

const crudController = 

router.post("",async(req,res)=>{
    try {
        const items = await modul.create(req.body);
        return res.status(201).send(items)
    }
    catch(err){
        return res.status(500).send(err.massage)
    }
})