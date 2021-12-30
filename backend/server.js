const express=require("express")
const server=express()
const connectDB=require('./config/database')
const userRoutes=require('./routes/auth')
const productRoutes=require('./routes/produit')




connectDB()


// middleware 
server.use(express.json())
server.use('/api/user',userRoutes)
server.use('/api/product',productRoutes)

const port =6000 

server.listen(port ,()=>console.log(`server ranning on port ${port}`))