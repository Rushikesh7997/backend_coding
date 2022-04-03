const express= require("express");

const User = require("../model/user.model");

const router= express.Router();

const crudController = require("./crud.controller");

router.post("",async(req,res)=>{
    try{
        const items= await model.create(req.body);

        return res.status(201).send(items)

    }catch(err){
        return res.status(500).send(err.message)
    }
});


router.patch("/:id", crudController(User).updateOne);

router.delete("/:id", crudController(User).deleteOne);

module.exports= router;