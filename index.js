const express=require('express')
const app=express();
const connectdatabase = require('./database.js')
app.use(express.json())
const {config} =require('dotenv')

config({path:'config/config.env'})
connectdatabase();
// const string=require('./stringrouter.js')
// app.use('/api',string)

 const market=require('./routes/marketroutes.js')
 app.use('/api',market)


app.listen(4000,(err)=>{
    console.log("server start on 4000");
})