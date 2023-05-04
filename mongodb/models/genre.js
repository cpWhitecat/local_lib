const mongoose = require('mongoose')
const Schema = mongoose.Schema

const genreSchema = new Schema({
    name:{
        type:String,
        required:true,
        min:3,
        max:100
    }
})

genreSchema.virtual('url').get(()=>{
    return this.name
})

module.exports=mongoose.model('genre',genreSchema)