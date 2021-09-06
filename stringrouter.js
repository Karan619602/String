const express=require('express')
const router=express.Router();
const admin=require('firebase-admin');


var serviceAccount = require('./admin.json');
admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: "https://fir-ab471-default-rtdb.firebaseio.com/",
authDomain: "fir-ab471.firebaseapp.com",
});

var db=admin.database()
 var ref =db.ref();
var currentdate=new Date()
 const usersRef=ref.child("kal");
usersRef.set({
    open:{
        sutta:{
            num:"6",
            rupee:"50"
        },
        patti:{
            num:"133",
            rupee:"350"
        },
        
        
    },
    close:{
        sutta:{
            num:"4",
            rupee:"100"
        },
        patti:{
            num:"120",
            rupee:"180"
        }
    },
    date:{
        current_date:currentdate,
        timestamp:Date.now()
    }
})
var date=Date.now() 
console.log(date);
 router.post('/string',async (req,res)=>{
    const {string}=req.body;
    const output=string.split(' ')
// console.log(output[3]);
var date=Date.now()
console.log(date);
const numbers=output[3].split(',')
var dash=new Array(3);
        for (let x = 0; x < dash.length; x++) {
             dash[x] =new Array(3);
            
        }
        for (let i = 0; i < 3; i++) {
             dash[i]=numbers[i].split('-')
         
         }
   //`/${output[0]}/`+`${output[1]}/`+output[2]

    db.ref(output[0]).orderByValue().on('value', (snapshot) => {
     
    //     var sum=0;
    //     snapshotVal = snapshot.val()
    //     if(snapshotVal===null){
    //         console.log("error string enter is not correct");
    //     }
        
    //     for (let j = 0; j < 3; j++) {
    //        if(snapshotVal.num===dash[j][0]){
    //             sum=sum+ snapshotVal.rupee*dash[j][1]
               
    //        }

    //         }
    //        res.status(201).json({
    //            "total":sum
    //        })
    //     //res.send(snapshotVal)
var time=snapshot.val()
var Dates=time.date.timestamp
// var d=new Date()
// var st=d.getTime()
console.log(`"time":${Dates}`);


    
    })
    
})

module.exports=router