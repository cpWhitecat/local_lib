const Book = require('../mongodb/models/book.js')
const Author = require('../mongodb/models/author.js')
const BookInstance = require('../mongodb/models/bookInstance.js')
const Genre = require('../mongodb/models/genre.js')

const asyncHandler = require('express-async-handler');


exports.index = asyncHandler(async (req,res,next)=>{
    const [
        bookCount,
        bookInstanceCount,
        authorCount,
        genreCount
    ] = await Promise.all([
        Book.countDocuments().exec(),
        BookInstance.countDocuments().exec(),
        Author.countDocuments().exec(),
        Genre.countDocuments().exec()
    ])


    res.render('index',{
        title:'this is Apple Chan Local library',
        book_count:bookCount,
        bookInstance_count:bookInstanceCount,
        author_count:authorCount,
        genre_count:genreCount
    })
})


// show all book 
exports.book_list = asyncHandler(async (req,res,next)=>{
    const books = await Book.find({},'title author').populate('author').exec();
    // console.log(JSON.stringify(books))
    res.render('book_list',{title:'Book List',book_list:books})
})

// show book information
exports.book_detail = (req,res)=>{
    res.send('this is book'+req.params.id)
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

exports.book_update_post = (req,res)=>{
    res.send('realistic post function by update')
}


