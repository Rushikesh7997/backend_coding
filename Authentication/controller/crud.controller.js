const post = (model) => async(req,res)=>{
    try{
       
          req.body.user_id = req.user._id;
        
        const items= await model.create(req.body);

        return res.status(201).send(items)

    }catch(err){
        return res.status(500).send(err.message)
    }
};

const updatOne= (model)=>async(req,res)=>{
    try {
        const items = await Section.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec();

        return res.status(201).send(items)

    } catch (error) {
       return res.status(500).send(error.message)
    }
};

const deleteOne=(model)=> async(req,res)=>{
    try {
       
        const items = await Section.findByIdAndDelete(req.params.id).lean().exec();

      return  res.send(items)
      
    } catch (error) {
       return res.status(500).send(error.message)
    }
}


module.exports= (model)=>{
    return {
        post:post(model),
        updatOne:updatOne(model),
        deleteOne:deleteOne(model)
    }
}