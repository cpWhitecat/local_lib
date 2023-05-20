/* eslint-disable spellcheck/spell-checker */
const Genre = require('../mongodb/models/genre.js')
const Book = require('../mongodb/models/book.js')
const AsyncHandler = require('express-async-handler')


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
    res.send('realistic get function by create')
})

exports.genre_create_post = AsyncHandler(async (req,res,next)=>{
    res.send('realistic post function by create')
})

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




