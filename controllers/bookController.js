const Book = require('../mongodb/models/book.js')
const Author = require('../mongodb/models/author.js')
const BookInstance = require('../mongodb/models/bookInstance.js')
const Genre = require('../mongodb/models/genre.js')

const AsyncHandler = require('express-async-handler');
const { body } = require('express-validator');


exports.index = AsyncHandler(async (req,res,next)=>{
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
exports.book_list = AsyncHandler(async (req,res,next)=>{
    const books = await Book.find({},'title author').populate('author').exec();

    res.render('book_list',{title:'Book List',book_list:books})
})

// show book information
exports.book_detail = AsyncHandler(async (req,res,next)=>{
    const [book,bookInstance] = await Promise.all([
        Book.findById(req.params.id).populate('author').populate('genre').exec(),
        BookInstance.find({'book':req.params.id}).populate('book').exec()
    ])

    res.render('book_detail',{
        title:'Book Detail',
        book:book,
        bookInstance:bookInstance
    })
})

// create book
exports.book_create_get = AsyncHandler(async (req,res,next)=>{
    res.send('realistic get function by create')
})

exports.book_create_post = [
    // body.
]

// delete book form
exports.book_delete_get = AsyncHandler(async (req,res,next)=>{
    res.send('realistic get function by delete')
})

exports.book_delete_post = AsyncHandler(async (req,res,next)=>{
    res.send('realistic post function by delete')
})

// update book
exports.book_update_get = AsyncHandler(async (req,res,next)=>{
    res.send('realistic get function by update')
})

exports.book_update_post = AsyncHandler(async (req,res,next)=>{
    res.send('realistic post function by update')
})


