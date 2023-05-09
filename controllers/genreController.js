/* eslint-disable spellcheck/spell-checker */
const Genre = require('../mongodb/models/genre.js')

// show all genre 
exports.genre_list = (req,res)=>{
    res.send('echo genre list ')
}

// show genre information
exports.genre_detail = (req,res)=>{
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




