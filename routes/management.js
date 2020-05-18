const express=require('express')
const routes=express.Router()
const isAuthenticated=require('../verify/jwt')
const login=require('../controlers/admin/login')
const Admin=require('../models/admin')
//const ActivateOrDeactivatePatient=require('../controlers/admin/activate_deactivate_user')
const ActivateOrDeactivateDoctor=require('../controlers/admin/activate_deactivate_doctors')
routes.post('/login',login)
routes.post('/doctors',ActivateOrDeactivateDoctor)
//routes.post('/patient',ActivateOrDeactivatePatient)

module.exports=routes