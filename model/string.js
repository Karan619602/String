const mongoose=require('mongoose')
const User=require('./user.js')
const schema=new mongoose.Schema({
     input_string:{
         type:String,
         required:true
     },
     user:{
        type: mongoose.Schema.ObjectId,
        ref:'User',
        required:true
               },
     date:{
         type:Date,
         default:Date.now()
     }
     
})

const User= new mongoose.model('Users',schema)

module.exports=User