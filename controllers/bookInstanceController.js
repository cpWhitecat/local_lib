/* eslint-disable spellcheck/spell-checker */
const BookInstance = require('../mongodb/models/bookInstance.js')

// show all bookInstance 
exports.bookInstance_list = (req,res)=>{
    res.send('echo bookInstance list ')
}

// show bookInstance information
exports.bookInstance_detail = (req,res)=>{
    req.params.id
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


