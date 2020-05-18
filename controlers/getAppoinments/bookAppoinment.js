const BookAppoinment=require('../../models/getAppoinment')

const Patient=require('../../models/patient')
module.exports=(req,res)=>{
const patient=new Patient()

const {doctorId,dateOfappoinments,pacientId,disease,phone,fromTime,toTime}=req.body


let bookAppoinment = new BookAppoinment(doctorId,dateOfappoinments,pacientId,disease,fromTime,toTime)

bookAppoinment.createAppointMents(res)
.then((result)=>{
return res.json({msg:"appoinment has been created succefully"})

}).catch((err)=>{

    return res.json({msg:"something went wrong"})
})

}