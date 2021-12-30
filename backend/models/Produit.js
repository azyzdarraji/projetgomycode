const mongoose=require('mongoose')
const schema=mongoose.Schema

const produitShema=new schema ({

    name:{
        type:String ,
        required:true
    },
    description :{
        type:String,
        required:true
    },
    prix:{
        type:String ,
        required:true
    },
    disponible: {
        type:String 
    },
    solde: {
        type:String 
    },
}
)

module.exports=mongoose.model('produit',produitShema)