const {register,login,homepage,productlisiting,productdetails,update,view1}=require('./service');
const{genSaltSync,hashSync,compareSync}=require("bcrypt");
const jwt = require("jsonwebtoken");
const products=[];
const addproduct=(product)=>{products.push(product);}
module.exports={
    Register1: (req, res) => {
        const data = req.body;
        console.log(data);
        const salt=genSaltSync(9);
        data.password=hashSync(data.password,salt);
        //const { u_fname,u_lname,mobile_no,education,email_id} = req.body;
        let {password} =req.body;
        register(data, (error, reslt) => {
          if (password.length < 9) {
            return res.status(404).json({ message: "Password less than 9 characters" })
         }res.render("login.ejs");
         console.log("registerd successfully!");
         return res.status(200).json({data:reslt});
          
          //res.render("login.ejs");
        });
      },
      Register: (req, res) => {   
        res.render("registration.ejs");
      },
    
      Login1: (req, res) => {
        const data = req.body;
    
        login(data, (error, result) => {
        let Login1=true;
        if(Login1==false){
          res.render('login.ejs',{message:"login failed",Login1})
        }
        homepage(data,(error,result)=>
        { let data=[];
          result.forEach((d)=>{
            data.push({
              id:d.id,
              cat_name:d.cat_name,
              cat_type:d.cat_type,
              price:d.price
            });
          });console.log(result);
             res.render("homepage.ejs",{data:result});
        });
         }) },
         
      Login: (req, res) => {
        res.render("login.ejs");
      },

     Homepage1:(req,res)=>{
            const data=req.body;
            homepage(data,(error,result)=>{
                if(error){
                    console.log("homepage");
                    return res.status(500).json({message:error});
                }
                res.render("login.ejs",{result:result});
            });
            },
        Homepage: (req, res) => {
          res.render("homepage.ejs");
        },
        ProductLisiting1:(req,res)=>{
          
          const data=req.body;
          productlisiting(data,(error,result)=>{
            console.log(result)
            
            let product=[];
            result.forEach((d)=>{
              product.push({
                product_name:d.product_name,
                product_type:d.product_type,
                product_brand:d.product_brand,
                cat_id:d.cat_id,
                cat_name:d.cat_name,
                cat_type:d.cat_type,
                price:d.price
              });
            });
            console.log(product);
            res.render("product.ejs",{data:product});
             // if(error){
                  
                 // return res.status(500).json({message:error});
              //}console.log(result);
              //res.render("login.ejs",{result:result});
          //});
})},
      ProductLisiting: (req, res) => {
        res.render("product.ejs");
      },
      ProductDetails1:(req,res)=>{
        const data=req.body;
        productdetails(data,(error,result)=>{
            if(error){
                console.log("homepage");
                return res.status(500).json({message:error});
            }
            res.render("login.ejs",{result:result});
        });
        },
    ProductDetails: (req, res) => {
      res.render("productdetails.ejs");
    },
AddProduct:(req,res)=>{
  const data=req.body;
  addproduct(data,(error,result)=>{
    const product_id = req.body.product_id;
    const product_name = req.body.product_name;
    const product_type=req.body.product_type;
    const price = request.body.price;
let count = 0;
for(let i = 0; i < request.cart.length; i++)
	{
   if(req.cart[i].product_id === product_id)
		{
      	req.cart[i].quantity += 1;

			count++;
		}

	}

	if(count === 0)
	{
		const cart_data = {
			product_id : product_id,
			product_name : product_name,
			price : parseFloat(price),
			quantity : 1
		};

		request.push(cart_data);
	}

	
});
},
  AddProduct:(req, res) => {
    res.render("add.ejs");
},
    CartPage1:(req,res)=>{
      const data=req.body;
      cartpage(data,(error,result)=>{
          if(error){
              console.log("homepage");
              return res.status(500).json({message:error});
          }
          res.render("cart.ejs",{result:result});
      });
      },
  CartPage: (req, res) => {
    res.render("cart.ejs");
  },
    }


