const express=require('express')
const routes = express.Router();
const patient=require('../controlers/patient/appoinmentHistory') 
const login=require('../controlers/patient/login')

routes.post('/login',login)

module.exports=routes