const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const bookSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  author:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:'author'
  },
  summary:{
    type:String,
    requried:true
  },
  isbn:{
    type:String,
    required:true
  },
  genre:[{
    type:Schema.Types.ObjectId,
    required:true
  }]
})


// return book url
bookSchema.virtual('url').get(()=>{
  return 'catalog/' + this._id
})

module.exports=mongoose.model('book',bookSchema)
