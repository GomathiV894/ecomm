const{createPool}=require("mysql2");
const db=createPool({
    host:'localhost',
    user:'root',
    password:'qwerty',
    port:3306,
    database:'ecomm',
    connectionLimit:15
});


module.exports=db;