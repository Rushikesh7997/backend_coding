const express=require("express");
const {body,validationResult}= require("express-validator");

const User =require("../models/user.model");

const router=express.Router();


router.post("/",
//firstname
body("firstname")
.not().isEmpty()
.trim()
.bail()
.withMessage("first name is required"),
//email
body("email")
.isEmail()
.custom(async(value)=>{
const user=await User.findOne({email:value});
if(user){
     throw new Error("email is not unique");

}
return true;

}),

body("pincode")
.not().isEmpty()
.withMessage("pincode required")
.isNumeric()
.custom(async(value)=>{
if(value && value.length<6){
    throw new Error("pincode must have 6 digit");
}
return true;


})
,
async(req,res)=>{

    try {
        const errors = validationResult(req);
        console.log({ errors });
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }
const user=await User.create(req.body);
return res.send(user);

}catch(err){
    return res.status(500).send(err.message);
}

})

module.exports=router;