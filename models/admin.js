const getDb=require('../util/database').getDb

class Admin{
constructor(phone,password){
this.phone=phone
this.password=password

}


findAdmin(res){
const db=getDb()
//this app has only one admin right now
db.collection("management").findOne({})
.then((result)=>{
    return result
}).catch(err=>{

    res.json({msg:"something went wrong"})
})


    
}





}

module.exports=Admin