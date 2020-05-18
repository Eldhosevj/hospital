const getDb=require('../util/database').getDb

class Patient{
//    constructor(name,password,phone,age,sex){
//    this.name= name
//    this.age=age
//    this.password=password
//    this.phone=phone
//    this.status=true
//    this.sex=sex
//}
 
findOnePacient(phone,res){

    const db = getDb();
    return db
      .collection('patient')
      .findOne({phone:phone})
      
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => {
        res.json({msg:"something went wrong"})
      });

}



blockPatient(phone,res){

  const db=getDb()
  return db.collection('doctor').updateOne({phone:phone},{$set:{status:false}})
  .then(result=>{
  
  }).catch(err=>{
      res.json({msg:"something went wrong"})
  })
  
  
  }

    }
    
    module.exports=Patient