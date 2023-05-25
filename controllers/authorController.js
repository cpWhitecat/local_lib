/* eslint-disable spellcheck/spell-checker */
const Author = require('../mongodb/models/author.js')
const Book = require('../mongodb/models/book.js')
const AsyncHandler = require('express-async-handler')
const { isError, lengthLimited } = require('../utils/index.js')
const { body, validationResult } = require('express-validator')


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
    res.render('author_form',{
        title:"Create Author"
    })
})

exports.author_create_post = [
    lengthLimited("first_name",{min:1})
        .withMessage('first name must be specified')
        .isAlphanumeric()
        .withMessage('first name has non alphanumeric characters'),
    lengthLimited("family_name",{min:1})
        .withMessage('family name must be specified')
        .isAlphanumeric()
        .withMessage('family name has non alphanumeric characters'),
    body('date_of_birth')
        .optional({values:false})
        .isISO8601()
        .toDate(),
    body('date_of_death')
        .optional({values:false})
        .isISO8601()
        .toDate(),
    AsyncHandler(async (req,res,next)=>{
        const errors = validationResult(req)

        const author = new Author({
            first_name:req.body.first_name,
            family_name:req.body.family_name,
            date_of_birth:req.body.date_of_birth,
            date_of_death:req.body.date_of_death,
        })

        if(errors.isEmpty()){
            res.render('author_form',{
                title:"Author Create",
                author:author,
                errors:errors.array()
            })

            return ;
        }else{
            await author.save()
            res.redirect(author.url)
        }
        
    })
]

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


