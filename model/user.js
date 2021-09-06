const mongoose=require('mongoose')

const schema=new mongoose.Schema({
     username:{
         type:String,
         required:true
     },
     email:{
         type:String,
         required:true
     },
     password:{
         type:String,
         required:true
     },
     createdAt:{
         type:Date,
         default:Date.now()
     }
     
})

const User= new mongoose.model('Users',schema)

module.exports=User