const getDb=require('../util/database').getDb

class Doctors{
//    constructor(name,phone,activeStatus,password,expertise){
//    this.name=name
//    this.phone=phone
//    this.status=true
//    this.password=password
//    this.expertise =expertise 
//    }
    
findAppointment(date,res){

const db=getDb()

return db.collection("appoiment").find({dateOfappoinments:date})
.then(result=>{
    return result
}).catch(err=>{
res.json({msg:"something went wrong"})

})

}

cancelAppoinments(phone,res){
    
const db=getDb()
return db.collection("patient").updateOne({phone:phone},{$set:{status:false}})
.then(result=>{
return result
}).catch(result=>{

    res.json({msg:"something went wrong"})
})

}

blockDoctor(phone,res){

const db=getDb()
return db.collection('doctor').updateOne({phone:phone},{$set:{status:false}})
.then(result=>{

}).catch(err=>{
    res.json({msg:"something went wrong"})
})


}
    
}
    
    module.exports=Doctors