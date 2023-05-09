const Author = requrie('/mongodb/models/author.js')

// show all author 
exports.author_list = (req,res)=>{
    res.send('echo author list ')
}

// show author information
exports.author_detail = (req,res)=>{
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
exports.author_update_get = (req,res)=>{
    res.send('realistic get function by update')
}

exports.author_update_get = (req,res)=>{
    res.send('realistic get function by update')
}


