const jwt=require('jsonwebtoken')

module.exports=(req,res,next)=>{
    try{
    const token=req.headers.authorization||req.body.token||req.query.token
const decoded=jwt.verify(token,process.env.JWT_KEY)
req.userData=decoded
req.isAuthenticated=true

//console.log(decoded,'i am running from bus')
//console.log('i am running jwt token')

next()
}
catch(error){


    return res.json({msg:"Auth Failed"})
}

}