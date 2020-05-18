
const jwt=require('jsonwebtoken')
const Patient=require('../../models/patient')


const login=(req,res)=>{
    let patient=new Patient('name','password','phone')
console.log('i am running')
    const {  password,phone}=req.body

 return patient.findOnePacient(phone,res)
.then(result=>{
if(!result){
   return res.json({"msg":"create an account"})
}
else {

if(result.password!==password){
    return res.json({"msg":"invalid user"})
}
else{
    const token=jwt.sign({name:result.name,
        _id:result._id,
        phone:result.phone
     },process.env.JWT_KEY,{
        expiresIn:"1h"
     })
    res.json({msg:"login successful",token:token})

}

}


}).catch(err=>{
    return res.json({err:err})
})

}
module.exports=login