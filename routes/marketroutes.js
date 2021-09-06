const express=require('express')
const router=express.Router();
const data=require('../data.json');
const Market = require('../model/market.js');
router.get('/market/:id',async (req,res)=>{
   
  const getMarket= await Market.findById(req.params.id)
  console.log(getMarket);
  res.send(getMarket)
})

router.post('/market',async (req,res)=>{
  const {str}=req.body
    var options= str.split(' ')
    const numbers=options[3].split(',')
var dash=new Array(3);
        for (let x = 0; x < dash.length; x++) {
             dash[x] =new Array(3);
            
        }
        for (let i = 0; i < 3; i++) {
             dash[i]=numbers[i].split('-')
             console.log(dash[i]);
         
         }
    var Markets;
 
   for(var i=0;i<options.length;i++){
     Markets= await Market.find({name:options[i]})
    if(Markets.length===0){
    console.log("err");
  //  break;
    } 
    else{
      res.send(Markets)
      console.log(Markets);
      break; 
    }

   }
        console.log(Markets.pattiRupees);
//  if(options[1]==="open"){
//   if(options[2]==="patti"){
//      if(das){}
//   }
//   if(options[2]==="sutta"){

//   }
//  }
//  else  if(options[1]==="close"){
//   if(options[2]==="patti"){

//   }
//   if(options[2]==="sutta"){
    
//   }
//  }

   })


  router.post('/create/market',async (req,res)=>{
    const Markets= await Market.create(req.body)
    console.log(Markets);
    res.send(Markets)

  })
module.exports=router
