const Book = requrie('/mongodb/models/book.js')


exports.index = (req,res)=>{
    res.send('site')
}


// show all book 
exports.book_list = (req,res)=>{
    res.send('echo book list ')
}

// show book information
exports.book_detail = (req,res)=>{
    req.params.id
}

// create book
exports.book_create_get = (req,res)=>{
    res.send('realistic get function by create')
}

exports.book_create_post = (req,res)=>{
    res.send('realistic post function by create')
}

// delete book form
exports.book_delete_get = (req,res)=>{
    res.send('realistic get function by delete')
}

exports.book_delete_post = (req,res)=>{
    res.send('realistic post function by delete')
}

// update book
exports.book_update_get = (req,res)=>{
    res.send('realistic get function by update')
}

exports.book_update_get = (req,res)=>{
    res.send('realistic get function by update')
}


