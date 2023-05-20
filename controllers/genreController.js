/* eslint-disable spellcheck/spell-checker */
const Genre = require('../mongodb/models/genre.js')
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
exports.genre_detail = (req,res)=>{
    res.send('genre id')
    req.params.id
}

// create genre
exports.genre_create_get = (req,res)=>{
    res.send('realistic get function by create')
}

exports.genre_create_post = (req,res)=>{
    res.send('realistic post function by create')
}

// delete genre form
exports.genre_delete_get = (req,res)=>{
    res.send('realistic get function by delete')
}

exports.genre_delete_post = (req,res)=>{
    res.send('realistic post function by delete')
}

// update genre
exports.genre_update_get = (req,res)=>{
    res.send('realistic get function by update')
}

exports.genre_update_post = (req,res)=>{
    res.send('realistic post function by update')
}




