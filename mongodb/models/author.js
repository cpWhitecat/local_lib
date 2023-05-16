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


authorSchema.virtual('name').get(function(){
    
    
    const entireName = this.first_name + '•' + this.family_name

    // console.log(entireName)
    
    return entireName
})

authorSchema.virtual("name").get(function(){   
// can't use ()=>{} in virtual property 
// this inherited outside area
    // console.log(this) 
    return this.family_name + "," + this.first_name;
  })

authorSchema.virtual('url').get(function(){
    return '/catalog/author/' + this._id
})
module.exports=mongoose.model('author',authorSchema)


