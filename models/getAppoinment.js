const getDb=require('../util/database').getDb

class GetAppoinnment{
    constructor(doctorId,dateOfappoinments,pacientId,disease,fromTime,toTime){
this.pacientId=pacientId
this.doctorId=doctorId
this.dateOfappoinments=dateOfappoinments
this.fromTime=fromTime
this.toTime=toTime
this.disease=disease

    }
    
createAppointMents(res){
const db=getDb()

return db.collection('appoiment'). 
insertOne(this).then((result)=>{
    return result
}).catch((err)=>{

res.json({msg:"something went wrong"})
})



}
findAllAppoinmentOfPatienet(){
    const db=getDb()

}

    
    }
    
    module.exports=GetAppoinnment