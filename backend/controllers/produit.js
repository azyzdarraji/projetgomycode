const Produit =require('../models/Produit')

// ADD NEW PRODUCT  ROLE ADMIN 

exports.addProduct=async(req,res)=>{
    const {name ,description ,prix,disponible,solide}=req.body


    try {
        const produit= new Produit ({
            name,description,prix,disponible,solide
        })

        await produit.save()
        res.status(200).send(produit)
    } catch (error) {
        res.status(500).send(error)
    }
  
}

// DELETE PRODUCT ROLE ADMIN 

exports.deleteProduct=async(req,res)=>{
        const{productId}=req.params
        try {
            await Produit.findByIdAndDelete(productId)
            res.status(200).send ("Product deleted")
        } catch (error) {
            res.status(500).send('not deleted')
            
        }
}

// GET ALL PRODUCTS 
exports.getAllProducts=async(req,res)=>{

    try {
        const products= await Produit.find()
        res.status(200).send({msg:"list of products",products})
    } catch (error) {
       res.status(500).send('err ') 
    }
}

//  GET ONE PRODUCT

exports.getOneProduct=async(req,res)=>{
    const {productId}=req.params
    console.log(req.params)
    //const{name,prix.disponible,solide}=req.body
    try {
      const product=  await Produit.findById(productId)
        res.status(200).send(product)
    } catch (error) {
console.log(error)
    res.status(500).send('Eror code OR id')   
    }
}


// UPDATE PRODUCT ROLE ADMIN 

exports.updateProduct=async (req,res)=>{
    
    const {productId}=req.params
    // const {name,prix,disponible,solide}=req.body
try {
    await Produit.findByIdAndUpdate(productId,{$set:{...req.body}})
    res.status(200).send("product updated")
} catch (error) {
    res.status(500).send('product not updated')
}
}
