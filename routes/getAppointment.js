const express=require('express')
const routes = express.Router();
const verify=require('../verify/jwt')
    
const bookAppoinment=require('../controlers/getAppoinments/bookAppoinment')
routes.post('/bookappoinments',verify,bookAppoinment)

module.exports=routes