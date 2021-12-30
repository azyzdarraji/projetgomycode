const mongoose=require ("mongoose")
require("dotenv").config({path:'./config/.env'})
const connectDB=async()=>{
    try {
       await mongoose.connect(process.env.magasinDB)
       console.log('done connexion with data base magasin aziza ')
    } catch (error) {
        console.log('db not connected')
        
    }

}
module.exports=connectDB