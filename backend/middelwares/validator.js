const {body,validationResult} =require ("express-validator")
// product rules

const productRules=[
    body('name',"name is required").notEmpty(),
    body('description',"description is required").notEmpty(),
    body('prix',"prix is required").notEmpty(),
    body('disponible',"disponible is required").notEmpty(),
    body('solide',"solide is required").notEmpty(),
]
// user rules
const registreRules=[
    body('firstname',"firstname is required").notEmpty(),
    body('lastname',"lastname is required").notEmpty(),
    body('email',"enter a valid email").isEmail(),
    body('password',"password at least 6 caracters").isLength({min: 6})
]

// login rules
const loginRules = [
    body("email", "enter a valid email").isEmail(),
    body("password", "password at least 6 caracters").isLength({ min: 6 }),
  ];


const validator =(req,res , next)=>{
    const error = validationResult (req);
    if (!error .isEmpty()) {
        return res.status(400).send({errors: error.array()})
    }
    next ()
}
module.exports={validator,productRules,registreRules,loginRules }