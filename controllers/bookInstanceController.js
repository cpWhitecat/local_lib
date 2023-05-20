/* eslint-disable spellcheck/spell-checker */
const AsyncHandler = require('express-async-handler')
const BookInstance = require('../mongodb/models/bookInstance.js')
const Book =require('../mongodb/models/book.js')

// show all bookInstance 
exports.bookInstance_list = AsyncHandler(async (req,res,next)=>{
    const bookInstance = await BookInstance.find().populate('book').exec();    
    // fix : model Book undefinded , see doc , the populate parm show defined to `ref` of property when the parm is a model

    res.render('bookInstance_list',{
        title:'book instance list',
        bookinstance_list:bookInstance
    })

})

// show bookInstance information
exports.bookInstance_detail = AsyncHandler(async (req,res,next)=>{
    const allBookInstance = await Book.findById(req.params.id).populate('book').exec()



    res.render('bookInstance_detail',{
        title:'Book Instance List',
        book:allBookInstance
    })
})

// create bookInstance
exports.bookInstance_create_get = AsyncHandler(async (req,res,next)=>{
    res.send('realistic get function by create')
})

exports.bookInstance_create_post = AsyncHandler(async (req,res,next)=>{
    res.send('realistic post function by create')
})

// delete bookInstance form
exports.bookInstance_delete_get = AsyncHandler(async (req,res,next)=>{
    res.send('realistic get function by delete')
})

exports.bookInstance_delete_post = AsyncHandler(async (req,res,next)=>{
    res.send('realistic post function by delete')
})

// update bookInstance
exports.bookInstance_update_get = AsyncHandler(async (req,res,next)=>{
    res.send('realistic get function by update')
})

exports.bookInstance_update_post = AsyncHandler(async (req,res,next)=>{
    res.send('realistic post function by update')
})


