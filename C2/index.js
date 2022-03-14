const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connect = ()=>{
    return mongoose.connect(
        // link 
        "mongodb://localhost:27015/Bank",
    );
};

// User

const userSchema = new mangoose.Schema(
    {
        firstName: {type: String, required: true},
        middleName: {type: String, required: false},
        lastName: {type: String, required: true},
        age: {type: Number, required: true},
        email: {type: String, required: true},
        address: {type: String, required: true},
        gender: {type: String, required: false},
    },
   {
        versionKey: false,
        timestamps: true,
    }
)

// model

const User = mongoose.model("user",userSchema);

// BranchDetail

const branchSchema = new mongoose.Schema(
    {
        name: {type:String,required:true},
        address: {type:String,required:true},
        IFCS: {type:String,required:true},
        MICR: {type:Number,required:true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const BranchDetail= mongoose.model("branchDetail", branchSchema); 

// MasterAccount

const masterSchema = new mongoose.Schema(
    {
        balnce: {type:Number,required:true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const MasterAccount= mongoose.model("masterAccount", masterSchema);

// SavingsAccount

const savingSchema = new mongoose.Schema(
    {
        account_number: {type:Number,required:true},
        balnce: {type:Number,required:true},
        interestRate: {type:Number,required:true}
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const SavingsAccount= mongoose.model("savingsAccount", savingSchema);

// FixedAccount

const fixedSchema = new mongoose.Schema(
    {
        account_number: {type:Number,required:true},
        balnce: {type:Number,required:true},
        interestRate: {type:Number,required:true},
        startDate: {type:Date,required:true},
        maturityDate: {type:Date,required:true},
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const FixedAccount= mongoose.model("fixedAccount", fixedSchema);

// Crud 

app.get("/user",async (req,res) => {
    try {
        const users = await User.find().lean().exec();
        return res.status(200).send({users:users})
    } catch (error) {
        return res.status(500).send({message: "Opps Error"})
    }
})

app.post("/user",async (req,res) => {
    try {
        const users = await SavingsAccount.create(req.body);
        return res.status(201).send(user);
    } catch (error) {
        return res.status(500).send({message: "Opps Error"})
    }
})

app.post("/user",async (req,res) => {
    try {
        const users = await FixedAccount.create(req.body);
        return res.status(201).send(user);
    } catch (error) {
        return res.status(500).send({message: "Opps Error"})
    }
})


app.listen(5000, async ()=>{
    try {
        await connect
    } catch (error) {
        console.log(error);
    }
    console.log("listening on port 5000");
});