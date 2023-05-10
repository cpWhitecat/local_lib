const mongoose = require('mongoose');
const Schema = mongoose.Schema

const authorSchema = new Schema({
    first_name:{
        type:String,required:true,max:100
    },
    family_name:{
        type:String,required:true,max:100
    },
    date_of_brith:{
        type:Date
    },
    date_of_death:{
        type:Date
    }
})


authorSchema.virtual('name').get(()=>this.first_name + '•' + this.last_name)

authorSchema.virtual('lifespan').get(()=>{
    return (this.date_of_death.getYear()-this.date_of_brith.getYear()).toString();
})

authorSchema.virtual('url').get(()=>{
    return '/catalog/author/' + this._id
})
module.exports=mongoose.model('author',authorSchema)