/* eslint-disable spellcheck/spell-checker */
const Author = require('../mongodb/models/author.js')
const Book = require('../mongodb/models/book.js')
const AsyncHandler = require('express-async-handler')
const { isError } = require('../utils/index.js')


// show all author 
exports.author_list = AsyncHandler(async (req,res,next)=>{
    const author_list = await Author.find({}).exec()
    
    res.render('author_list',{
        title:"Author List",
        allAuthorList:author_list
    })
})

// show author information
exports.author_detail = AsyncHandler(async (req,res,next)=>{
    const [author,author_books] = await Promise.all([
        Author.findById(req.params.id).exec(),
        Book.find({author:req.params.id},'title summary').exec()
    ])


    if(author && author_books){
        res.render('author_detail',{
            title:"Author",
            author_name:author,
            books:author_books
        })
    }else{
        isError(req,404,`Can't found author and some books by author`,next)
    }
})

// create author
exports.author_create_get = AsyncHandler(async (req,res,next)=>{
    res.send('realistic get function by create')
})

exports.author_create_post = AsyncHandler(async (req,res,next)=>{
    res.send('realistic post function by create')
})

// delete author form
exports.author_delete_get = AsyncHandler(async (req,res,next)=>{
    res.send('realistic get function by delete')
})

exports.author_delete_post = AsyncHandler(async (req,res,next)=>{
    res.send('realistic post function by delete')
})

// update author
// eslint-disable-next-line spellcheck/spell-checker
exports.author_update_get = AsyncHandler(async (req,res,next)=>{
    res.send('realistic get function by update')
})

exports.author_update_post = AsyncHandler(async (req,res,next)=>{
    res.send('realistic post function by update')
})


