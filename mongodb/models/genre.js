const mongoose = require('mongoose')
const Schema = mongoose.Schema

const genreSchema = new Schema({
    name:{
        type:String,
        required:true,
        min:3,
        max:100,
        enum:['affection','military','fiction','documentary'],
    }
})

genreSchema.virtual('url').get(()=>{
    return "/catelog/genre"+this._id
})

module.exports=mongoose.model('genre',genreSchema)