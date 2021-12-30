const express= require('express')
const router=express.Router()
const produit=require('../models/Produit')
const {addProduct, deleteProduct, getAllProducts,getOneProduct,updateProduct} =require ('../controllers/produit')
const { productRules,validator } = require('../middelwares/validator')
const isAuth = require("../middelwares/isAuth");




//test 

router.get('/test',(req,res)=>{
    res.send('produit')
}
)

// CRUD Product 

// methode Post 
//url /addproduct  role admin
// req.body 
router.post('/addproduct',[isAuth,productRules,validator],addProduct)



// methode Delete 
// url /deleteproduct/:productId
// req.params
router.delete('/deleteproduct/:productId',isAuth,deleteProduct)

//methode get 
//url /getallproducts
// Product.find 

router.get('/getallproducts',isAuth,getAllProducts)

// methode get 
// url /getoneproduct/:productId
//req.params
router.get('/getoneproduct/:productId',isAuth,getOneProduct)



// methode put 
//url /updateproduct/:productId
//req.body
//req.params
router.put('/updateproduct/:productId',isAuth,updateProduct)

module.exports=router