const express=require('express')
const routes = express.Router();
    
const login=require('../controlers/doctors/login')

const verify=require('../verify/jwt')
const detailsOfAppointMents=require('../controlers/doctors/detailsOfAppointMents')

const regectAppoinment=require('../controlers/doctors/regectAppoinment')


routes.post('/login',login)


module.exports=routes