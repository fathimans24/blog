const express = require("express");
const morgan=require('morgan');
const dotenv=require('dotenv');
const blogModel=require('./model');
require('./connection')

require('dotenv').config();

const app = express();
var PORT = 3000;

app.use(express.json());
app.use(morgan("dev"));

//Write missing code here and all the CRUD operations on the database
const router=express.Router();


// GET Operation
router.get('/',async(req,res)=>{
  try {
      const data=await blogModel.find();
      res.status(200).send(data);
      } catch (error) {
      res.status(404).send('Data not found');
      }
  })
  // POST Operation
  router.post('/addBlog',async(req,res)=>{
      try {
          var item=req.body;
          const data1=new blogModel(item);
          const saveddata=await data1.save();
          res.status(200).send('Post successful');
      } catch (error) {
          res.status(404).send('Post unsuccessful');
      }
  })
  // UPDATE operation
  router.put('/edit/:id',async(req,res)=>{
      try {
          const id=req.params.id;
          const data=await blogModel.findByIdAndUpdate(id,req.body)
          res.status(200).send('Update successful')
      } catch (error) {
          res.status(404).send('Update unsuccessful');
      }
  })
  // Delete operation
  router.delete('/delete/:id',async(req,res)=>{
      try {
          const id=req.params.id;
          const data=await blogModel.findByIdAndDelete(id)
          res.status(200).send('Delete successful')
      } catch (error) {
          res.status(404).send('Delete unsuccessful');
      }
  })
  
  
  
  
app.use('/blogs',router);

  
app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});


module.exports=router;
