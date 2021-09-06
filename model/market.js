const mongoose=require('mongoose')

const schema=new mongoose.Schema({
  
    name: {
        type: String,
        required: true,
      },
      openPattiNumber: {
        type: Number,
        required: true,
        default: 0,
      },
      pattiRupees: {
        type: Number,
        required: true,
        default: 0,
      },
      openSuttaNumber: {
        type: Number,
        required: true,
        default: 0,
      },
      SuttaRupees: {
        type: Number,
        required: true,
        default: 0,
      },
      closePattiNumber: {
        type: Number,
        required: true,
      },
      closeSuttaNumber: {
        type: Number,
        required: true,
      },
      date:{
          type:Date,
          default:Date.now()
      }
})

const Market= new mongoose.model('Markets',schema)

module.exports=Market