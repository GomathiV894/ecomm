const router=require('express').Router();
const{Register1,Register,Login,Login1,Homepage1,Homepage, ProductLisiting1, ProductDetails1, ProductDetails, ProductLisiting,AddProduct,CartPage1, CartPage}=require('./controller');

//register
router.get("/register",Register);
router.post("/register",Register1);
//login
router.post("/login",Login1);
router.get("/login",Login);
//homepage
router.post("/homepage",Homepage1);
router.get("/homepage",Homepage);


router.get("/addproduct",AddProduct);
//productlisiting
router.post("/productlisiting",ProductLisiting1);
router.get("/productlisiting",ProductLisiting);

//productdetails
router.post("/productdetails",ProductDetails1);
router.get("/productdetails",ProductDetails);
//cartpage
router.post("/cartpage",CartPage1);
router.get("/cartpage",CartPage);

//router.get("/view1",View);
module.exports=router;