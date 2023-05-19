const mongoose = require('mongoose');
const Schema = mongoose.Schema
const {DateTime}= require('luxon')
// const option = {
//     discriminatorKey:'kind'
// }
// this option was refine date of deadth type and collection of different model



const authorSchema = new Schema({
    first_name:{
        type:String,required:true,max:100
    },
    family_name:{
        type:String,required:true,max:100
    },
    date_of_birth:{
        type:Date
    },
    date_of_death:{
        type:Date
    },
    // living:{
    //     type:Boolean
    // }
})
// I want to set date of death type prefective
// I want to set union type at first
/** 
 * but the type not applicable
 * 
 * you can use mongoose.SchemaTypes.Mixed
 * 
 * I can use the property discriminator when I wll try to achieve
*/



authorSchema.virtual('name').get(function(){
    
    
    const entireName = this.first_name + '•' + this.family_name

    // console.log(entireName)
    
    return entireName
})

// authorSchema.virtual("name").get(function(){   
// // can't use ()=>{} in virtual property 
// // this inherited outside area
//     // console.log(this) 
//     return this.family_name + "," + this.first_name;
//   })
authorSchema.virtual('lifeSpanTime').get(function(){
    const formatted_birth = this.date_of_birth 
    ? DateTime.fromJSDate(this.date_of_birth).toISODate() 
    : '';

    const formatted_death = this.date_of_birth 
    ? DateTime.fromJSDate(this.date_of_birth).toISODate() 
    : '';

    if(formatted_birth ==''){
        return '出生日不详';
    }

    // We know the author birth day and the anthor is living
    return formatted_birth.toString() + '至' + formatted_death.toString()

})

authorSchema.virtual('url').get(function(){
    return '/catalog/author/' + this._id
})
const author = mongoose.model('author',authorSchema)
// const test1 = new author({first_name:'lsfjle',family_name:'jfkelk',date_of_birth:'1984-01-19',date_of_death:false})

// console.log(test1+'--------------')
// const deadAuthor = author.discriminator('dead',new Schema({'living':{
//     type:Schema.Types.ObjectId,

// }},option))
// deadAuthor.
// // 使用这样的定义会出问题， 它的_id 没有一样
// const test = new deadAuthor({first_name:'lsfjle',family_name:'jfkelk',date_of_brith:'1984-01-19',date_of_death:false,living:false})

// console.log(test)
module.exports= author 




