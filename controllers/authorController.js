/* eslint-disable spellcheck/spell-checker */
const {Author,DeadAuthor} = require('../mongodb/models/author.js')
const expressAsyncHandler = require('express-async-handler')


// show all author 
exports.author_list = expressAsyncHandler(async (req,res,next)=>{
    const author_list = await DeadAuthor.find({}).exec()
    
    res.render('author_list',{
        title:"Author List",
        allAuthorList:author_list
    })
})

// show author information
exports.author_detail = (req,res)=>{
    res.send('author id'+req.params.id)
    req.params.id
}

// create author
exports.author_create_get = (req,res)=>{
    res.send('realistic get function by create')
}

exports.author_create_post = (req,res)=>{
    res.send('realistic post function by create')
}

// delete author form
exports.author_delete_get = (req,res)=>{
    res.send('realistic get function by delete')
}

exports.author_delete_post = (req,res)=>{
    res.send('realistic post function by delete')
}

// update author
// eslint-disable-next-line spellcheck/spell-checker
exports.author_update_get = (req,res)=>{
    res.send('realistic get function by update')
}

exports.author_update_post = (req,res)=>{
    res.send('realistic post function by update')
}


