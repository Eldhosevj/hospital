const express = require('express');
const mongoose=require('mongoose')
const dotenv=require("dotenv")

const bodyParser = require('body-parser');
const PORT=process.env.PORT||5000

const cors=require('cors')
const admin=require('./routes/management')
const pacient=require('./routes/patient')
const getAppoinment=require('./routes/getAppointment')
const doctors=require('./routes/doctors')
const mongoConnect=require('./util/database').mongoConnect
const app=express()



app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',getAppoinment)
app.use('/pacient',pacient)

//app.use('/admin',admin)
//app.use('/doctors',doctors)


dotenv.config({
    path:'./.env'
})


mongoConnect(()=>{
    console.log('mongodb is running on background')
    app.listen(PORT, () => console.log(`Server started listening on port ${PORT}!`));
})
      
