const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const connect = () => {
    return mongoose.connect(
        "mongodb+srv://Rushikesh_12345@cluster0.tiemy.mongodb.net/database2?retryWrites=true&w=majority"

    );
};

//Section Schema -> Only name
//Step 1 - creating the Schema

const sectionSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
       
    },
    {
        versionKey: false,
        timestamps: true,
    }
);


try{
    const Section = mongoose.model("section", sectionSchema);
}catch(err){
    console.log('err', err.message);
}

//Books SCHEMA

const bookSchema = new mongoose.Schema({
    name: {type: String, required: true},
    body: {type: String, required: true},
    section_id: {type: mongoose.Schema.Types.ObjectId, ref: "section", required: true},

},
{
    versionKey: false,
    timestamps: true,
});

const Book = mongoose.model("books", bookSchema)

//author schema

const authorSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
},
{
    versionKey: false,
    timestamps: true,
})

const Author = mongoose.model("author", authorSchema)

// Section Crud


app.get("/sections", async (req, res) => {
    const section = await Section.find().lean().exec();

    return res.send(section);

    res.send("hello");
});

app.post("/sections", async (req, res) => {
    try{
        const section = await Section.create(req.body);

        return res.status(201).send(err.message)
    } catch(err) {
        return res.status(500).send(err.message)
    }
});

app.get("/section/:id", async(req, res) => {
    try{
        const section = await Section.findById(req.params.id).lean().exec();
        return res.send(section);
    } catch(err) {
        return res.status(500).send(err.message)
    }
});

app.patch("/section/:id", async(req, res) => {
    try{
        const section = await Section.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();
        return res.send(section);
    } catch(err) {
        return res.status(500).send(err.message)
    }
});

app.delete("/sections/:id", async(req, res) => {
    try{
        const section = await Section.findByIdAndDelete(req.params.id).lean().exec();

        return res.send(section);
    } catch(error) {
        return res.status(500).send(error.message)
    }
});

//Book crud 

app.get("/books", async(req, res) => {
    try{
        const book = await (await Book.find().populate({path: "section_id", select:["name"]})).lean().exec();

        return res.send(book);
    }
    catch(err) {
        return res.status(500).send(err.message)
    }
});


app.post("/books", async(req, res) => {
    try{
        const book = await Book.create(req.body);

        return res.status(201).send(book)
    }
    catch(err) {
        return res.status(500).send(err.message)
    }
})


app.get("/books/:id", async(req, res) => {
    try{
        const book = await Book.findById(req.params.id)
        .populate([
            {path:"section_id", select: ["name"]},
            {path: "author_id", select:["firstName", "lastName"]}
        ]).lean().exec();

        return res.send(book);
    }
    catch(err) {
        return res.status(500).send(err.message)
    }
})


app.patch("/books/:id", async(req, res) => {
    try{
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        return res.status(500).send(book)
    }
    catch(error) {
        return res.status(500).send(error.message)
    }
});

app.delete("/books/:id", async(req, res) => {
    try{
        const book = await Book.findByIdAndDelete(req.params.id).lean().exec();
        return res.send(book)
    }
    catch(error) {
        return res.status(500).send(error.message)
    }
});


app.get("/authors", async (req, res) => {
    try{
        const author = await Author.find().lean().exec();

        return res.send(author);
    }
    catch(err) {
        return res.status(500).send(err.message)
    }
});


app.post("/authors", async(req, res) => {
    try{
        const author = await Author.create(req.body);
        return res.status(201).send(author)
    }
    catch(err) {
        return res.status(500).send(err.message)
    }
});

app.get("/authors/:id", async(req, res) => {
    try{
        const  author = await Author.findById(req.params.id).lean().exec();

        return res.send(author);
    }
    catch(err) {
        return res.status(500).send(err.message)
    }
})


app.patch("/authors/:id", async(req, res) => {
    try{
        const author = await Author.findByIdAndUpdate(req.params.id, {new:true}).lean().exec();

        return res.status(201).send(author)
    }
    catch(err) {
        return res.status(500).send(err.message);
    }
});

app.delete("/authors/:id", async(req, res) => {
    try{
        const author = await Author.findByIdAndDelete(req.params.id).lean().exec();
        return res.send(author)
    }
    catch(err) {
        return res.status(500).send(err.message)
    }
})


//server 

app.listen(5000, async () => {
    try{
        await connect();
        console.log("listening on 5000 port")
    }
    catch(err) {
        console.log('err', err.message)
        
    }
})