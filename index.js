const express=require('express');
const app=express();
const router=require('./router');
const db = require("./config");
const bodyparser=require("body-parser");



const nodemon = require('nodemon');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json({limit:"10MB"}));
app.use('/',router);
//const secretkey = "fjsnfyjhbklnlhuvflnik";
app.set("view engine", "ejs");


//DB CONNECTION
db.getConnection((error,Connection)=>{
    if(error){
        console.error('Database Connection Failed:',error);
    }else{
        console.log('Connected to the Database');
       // connection.release();
    }
})
 


app.listen(2000,()=>{
    console.log("This Server is Running!");
})