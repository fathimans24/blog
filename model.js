const mongoose=require("mongoose");
const schema = mongoose.Schema({
//Write missing code hereconst movieSchema=mongoose.Schema({
    blogName:String,
    blogDirector:String,
    blogDescription:String,
    blogRating:Number
});


//Write missing code here
const blogData=mongoose.model('blog',schema);   //movie is collection name without s.....data  in the movieSchema is moved to the collection movie and stored it on movieData
module.exports=blogData;