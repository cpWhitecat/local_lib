/* eslint-disable spellcheck/spell-checker */
const expressAsyncHandler = require('express-async-handler')
const BookInstance = require('../mongodb/models/bookInstance.js')

// show all bookInstance 
exports.bookInstance_list = expressAsyncHandler(async (req,res,next)=>{
    const bookInstance = await BookInstance.find().populate('book').exec();    
    // fix : model Book undefinded , see doc , the populate parm show defined to `ref` of property when the parm is a model

    res.render('bookInstance_list',{
        title:'book instance list',
        bookinstance_list:bookInstance
    })

})

// show bookInstance information
exports.bookInstance_detail = (req,res)=>{
    res.send('this this id '+req.params.id)
    
}

// create bookInstance
exports.bookInstance_create_get = (req,res)=>{
    res.send('realistic get function by create')
}

exports.bookInstance_create_post = (req,res)=>{
    res.send('realistic post function by create')
}

// delete bookInstance form
exports.bookInstance_delete_get = (req,res)=>{
    res.send('realistic get function by delete')
}

exports.bookInstance_delete_post = (req,res)=>{
    res.send('realistic post function by delete')
}

// update bookInstance
exports.bookInstance_update_get = (req,res)=>{
    res.send('realistic get function by update')
}

exports.bookInstance_update_post = (req,res)=>{
    res.send('realistic post function by update')
}


