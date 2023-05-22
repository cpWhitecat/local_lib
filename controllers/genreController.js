/* eslint-disable spellcheck/spell-checker */
const Genre = require('../mongodb/models/genre.js')
const Book = require('../mongodb/models/book.js')
const AsyncHandler = require('express-async-handler')
const { body, validationResult } = require('express-validator');
const { lengthLimited } = require('../utils/index.js');

// show all genre 
exports.genre_list = AsyncHandler(async (req,res,next)=>{
    const genreList = await Genre.find().sort().exec();


    res.render('genre_list',{
        title:'Genre List',
        GenreList:genreList
    })
})

// show genre information
exports.genre_detail = AsyncHandler(async (req,res,next)=>{
    const [genre , bookInGenre] = await Promise.all([
        Genre.findById(req.params.id).exec(),
        Book.find({genre:req.params.id},'title summary').exec()
    ])
    
// when Genre doesn't found

    if(genre == null) {
        const error = new Error(`Genre is ${genre},Doesn't found genre.`)
        error.status = 404

        return next(error)
    }


    res.render('genre_detail',{
        title:'Genre Detail',
        genre:genre,
        genreBook:bookInGenre
    })

})

// create genre
exports.genre_create_get = AsyncHandler(async (req,res,next)=>{
    res.render('genre_form',{
        title:'Create Genre'
    })
})

// want to use ...[] but this is commonjs
exports.genre_create_post = [  
    lengthLimited('genre',{min:3}),
    AsyncHandler(async (req,res,next)=>{
        const errors = validationResult(req)

        const genre = new Genre({
            name:req.body.name
        })

        // because it's errors
        if(errors.isEmpty()){
            res.render('genre_form',{
                title:'Create Genre',
                genre:genre,
                errors:errors.array()
            })

            return
        }else{
            // the data is valid

            const hasGenre = await Genre.findOne({name:req.body.name}).exec()
            res.redirect(genre.url)
        }
    })
]

// delete genre form
exports.genre_delete_get = AsyncHandler(async (req,res,next)=>{
    res.send('realistic get function by delete')
})

exports.genre_delete_post = AsyncHandler(async (req,res,next)=>{
    res.send('realistic post function by delete')
})

// update genre
exports.genre_update_get = AsyncHandler(async (req,res,next)=>{
    res.send('realistic get function by update')
})

exports.genre_update_post = AsyncHandler(async (req,res,next)=>{
    res.send('realistic post function by update')
})




