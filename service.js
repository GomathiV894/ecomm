const{response}=require('express');
const db=require("./config");
module.exports={
    register:(data,callback)=>{
        db.query(`insert into euser1 (u_name,email_id,password,mobile_no)values(?,?,?,?)`,
            [data.u_name,data.email_id,data.password,data.mobile_no],(error,result,fields)=>{
                    if(error){
                        console.log(error);
                    }return callback(null,result);
                    });},
                  
                
                login:(data,callback)=>{
                    db.query(`select * from euser1 where email_id=? `,[data.email_id],(err,reslt,fields)=>{
                    if(reslt.length>0){
                        console.log("loging successfully!");
                       }else{
                          console.log("err");
                      }  return callback(null,reslt);
                    });
                  },
                  

                 
                  category_create:(data,callback)=>{
                    db.query(`insert into category(cat_name,cat_type,price)values(?,?,?)`,
            [data.cat_id,data.cat_type,data.cat_name,data.price],(error,result,fields)=>{
                    if(error){
                        console.log(error);
                    }return callback(null,result);
                    });
                  },
                  update : (data,callback) => {
                      
                       db.query('update euser1 set profile_image=? where id=?',[data.filenmae,data.id],
                       (error,result,fields)=>{
                                   if (error) {
                                     console.log("An error occured");
                                     }
                                  return callback(null,result);
                                 });
                   },
                homepage:(data,callback)=>{
                    db.query(`select * from product where cat_id`,[data.cat_id],(error,result,field)=>{
                        if(error){
                            console.log(error);
                            return callback(error);
                        }return callback(null,result);
                    })
                },
                productlisiting:(data,callback)=>{
                    db.query(`select * from product where cat_id=?`,[data.cat_id],(error,result,fields)=>{
                                if(error){
                                    console.log(error);
                                }return callback(null,result);
                                });
                            },
                 productdetails:(data,callback)=>{
                    db.query(`select * from product where product_name=?`,[data.product_name],(error,result,fields)=>{
                            if(error){
                             console.log(error);
                                }return callback(null,result);
                                     });
                 },
              productdetails:(data,callback)=>{
                db.query(`insert into product (product_name,product_type,product_brand,cat_id,cat_name,cat_type)values(?,?,?,?)`,
                  [data.product_name,data.product_type,data.product_brand,data.cat_id,data.cat_name,data.cat_type],(error,result,fields)=>{
                    if(error){
                    console.log(error);
                    }return callback(null,result);
                   });
              },
              
                                                            
    }
