const mongoose = require("mongoose");

//Write missing code here for database connection
const mongoDB_URL = "mongodb+srv://SubaSreeRamesh01:subasree1999@cluster0.61hpy.mongodb.net/blogApp?retryWrites=true&w=majority&appName=Cluster0";
require('dotenv').config()
mongoose.connect(mongoDB_URL).then(()=>{
    console.log('connection established');
}).catch(()=>{
    console.log('Error in connection');
})